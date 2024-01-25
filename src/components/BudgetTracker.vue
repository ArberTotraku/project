<template>
   
    <div class="chart-container">
      <div class="buttons">
        <button v-for="option in options" :key="option.label" @click="updateDataset(option.data)">
          {{ option.label }}
        </button>
      </div>
      <canvas id="responsiveChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  Chart.register(...registerables);
  
  export default {
    data() {
      return {
        chart: null,
        options: [
          { label: 'Sales', data: [5, 10, 5, 2, 20, 30, 45] },
          { label: 'Expenses', data: [3, 7, 2, 9, 11, 25, 40] },
          { label: 'Profit', data: [1, 3, 4, 8, 15, 22, 30] },
        ],
      };
    },
    mounted() {
      this.initChart(this.options[0].data);
    },
    methods: {
      initChart(dataSet) {
        const ctx = document.getElementById('responsiveChart').getContext('2d');
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Dataset',
              data: dataSet,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              }
            },
            maintainAspectRatio: false,
          }
        });
      },
      updateDataset(dataSet) {
        this.chart.data.datasets[0].data = dataSet;
        this.chart.update();
      }
    }
  };
  </script>
  
  <style scoped>

  * {
    margin-top: 40px;
    
  }
  .chart-container {
   
    height: 15rem;
    width: 18rem;
    margin: 10px;
  }
  
  .buttons {
    text-align: center;
    margin-bottom: 10px;
    margin: -10px;
  }

  </style>
  