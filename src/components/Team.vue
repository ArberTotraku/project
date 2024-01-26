<template>
  <div class="dashboard">
    <div class="search-filter">
      <input type="text" v-model="searchQuery" placeholder="Search by name...">
      <select v-model="roleFilter">
        <option value="">Filter by role</option>
        <option v-for="role in uniqueRoles" :key="role" :value="role">{{ role }}</option>
      </select>
    </div>

    <button class="add-button" @click="addMember">Add New Team Member</button>

    <ul class="team-member-list">
      <li v-for="(member, index) in filteredMembers" :key="member.name">
        {{ member.name }} - {{ member.role }} - ${{ member.salary }}
        <button @click="editMember(member, index)">Edit</button>
        <button @click="deleteMember(index)">Delete</button>
      </li>
    </ul>

    <div v-if="editIndex !== null" class="edit-form">
      <h3>Edit Team Member</h3>
      <input v-model="selectedMember.name" placeholder="Name">
      <input v-model="selectedMember.role" placeholder="Role">
      <input type="number" v-model.number="selectedMember.salary" placeholder="Salary">
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      members: [],
      searchQuery: '',
      roleFilter: '',
      selectedMember: { name: '', role: '', salary: 0 },
      editIndex: null,
    };
  },
  computed: {
    filteredMembers() {
      return this.members.filter(member => {
        const matchesName = member.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesRole = this.roleFilter ? member.role === this.roleFilter : true;
        return matchesName && matchesRole;
      });
    },
    uniqueRoles() {
      return [...new Set(this.members.map(member => member.role))];
    }
  },
  methods: {
    addMember() {
      this.selectedMember = { name: '', role: '', salary: 0 };
      this.editIndex = this.members.length;
      this.members.push(this.selectedMember);
    },
    editMember(member, index) {
      this.selectedMember = { ...member };
      this.editIndex = index;
    },
    saveEdit() {
      this.members.splice(this.editIndex, 1, this.selectedMember);
      this.selectedMember = { name: '', role: '', salary: 0 };
      this.editIndex = null;
    },
    cancelEdit() {
      if (this.selectedMember.name === '' && this.selectedMember.role === '' && this.selectedMember.salary === 0) {
        this.members.splice(this.editIndex, 1); 
      }
      this.selectedMember = { name: '', role: '', salary: 0 };
      this.editIndex = null;
    },
    deleteMember(index) {
      this.members.splice(index, 1);
      if (this.editIndex === index) {
        this.cancelEdit();
      }
    }
  }
};
</script>
  
  <style scoped lang="scss">
  .dashboard {

  
   .add-button {
    margin-left: 10px;
          padding: 5px 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin: 0 auto;
          font-size: 1rem;
          margin-bottom: 10px;
   }
    margin: 0 auto;
    .search-filter {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 20px;
  
      input[type="text"], select {
        flex: 1;
        margin: 5px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
  
        @media (max-width: 400px) {
          width: 100%;
        }
      }
    }
  
    .team-member-list {
      list-style-type: none;
      padding: 0;
  
      li {
        margin-bottom: 10px;
        button {
          margin-left: 10px;
          padding: 5px 10px;
          background-color: #4CAF50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      }
    }
  
    .edit-form {
      margin-top: 20px;
      background-color: #f2f2f2;
      padding: 20px;
      border-radius: 8px;
  
      input, button {
        display: block;
        margin: 10px 0;
        padding: 8px;
        width: 100%;
        box-sizing: border-box;
  
        border: 1px solid #ccc;
        border-radius: 4px;
      }
  
      button {
        background-color: #f44336;
        color: white;
        border: none;
      }
    }
  }
  </style>
  