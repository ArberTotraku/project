<template>
  <div class="budget-tracker">
    <h2>Budget Tracker</h2>
    <div class="inputs">
      <div class="input-group">
        <input type="number" v-model.number="newEarning" placeholder="Add Earning" />
        <button @click="addEarning">Add</button>
      </div>
      <div class="input-group">
        <input type="number" v-model.number="newExpense" placeholder="Add Expense" />
        <select v-model="newExpenseCategory">
          <option value="bills">Bills</option>
          <option value="office">Office Expenses</option>
        </select>
        <button @click="addExpense">Add</button>
      </div>
    </div>
    <div class="chart-container">
      <canvas ref="budgetChart"></canvas>
    </div>
  </div>

  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  export default {
    setup() {
      const newEarning = ref(0);
      const newExpense = ref(0);
      const newExpenseCategory = ref('bills');
      const earnings = ref([]);
      const expenses = ref([]);
      const budgetChartRef = ref(null);
      let chart = null;
  
      const addEarning = () => {
        earnings.value.push(newEarning.value);
        newEarning.value = 0;
        updateChart();
      };
  
      const addExpense = () => {
        expenses.value.push({ amount: newExpense.value, category: newExpenseCategory.value });
        newExpense.value = 0;
        newExpenseCategory.value = 'bills';
        updateChart();
      };
  
      const initChart = () => {
        const ctx = budgetChartRef.value.getContext('2d');
        chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Earnings', 'Bills', 'Office Expenses'],
            datasets: [{
              label: 'Budget Overview',
              data: [0, 0, 0],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 206, 86, 0.2)'
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255,99,132,1)',
                'rgba(255, 206, 86, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            maintainAspectRatio: false
          }
        });
      };
  
      const updateChart = () => {
        const earningsTotal = earnings.value.reduce((acc, cur) => acc + cur, 0);
        const billsTotal = expenses.value.filter(e => e.category === 'bills').reduce((acc, cur) => acc + cur.amount, 0);
        const officeTotal = expenses.value.filter(e => e.category === 'office').reduce((acc, cur) => acc + cur.amount, 0);
        
        chart.data.datasets[0].data = [earningsTotal, billsTotal, officeTotal];
        chart.update();
      };
  
      onMounted(() => {
        if (budgetChartRef.value) {
          initChart();
        }
      });
  
      return { newEarning, newExpense, newExpenseCategory, earnings, expenses, addEarning, addExpense, budgetChartRef };
    }
  };
  </script>
  
  <style scoped>
    /* CSS/SCSS code remains the same */
  </style>
  