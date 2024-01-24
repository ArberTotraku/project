<template>
    <div>
      <h1>My To-Do List</h1>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Type enter to add">
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          {{ todo.title }}
          <button @click="removeTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTodo: '',
        todos: [],
      };
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim()) {
          this.todos.push({ id: Date.now(), title: this.newTodo });
          this.newTodo = '';
        }
      },
      removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin: 0 auto;

  h1 {
    color: #333;
    font-family: 'Helvetica Neue', sans-serif;
  }

  input {
    margin: 20px 0;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #ddd;
    border-radius: 4px;
    width: 100%; 
    max-width: 300px; 

    &:focus {
      border-color: #7cb342;
      outline: none;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    width: 100%; 

    li {
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 10px;
      transition: background-color 0.3s ease;
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 300px; 

      &:hover {
        background-color: #f0f0f0;
      }

      button {
        border: none;
        background-color: #f44336;
        color: white;
        border-radius: 4px;
        padding: 5px 10px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: #d32f2f;
        }
      }
    }
  }
}

@media (max-width: 600px) {
  div {
    margin-top: 20px;

    h1 {
      font-size: 20px; 
    }

    ul {
      li {
        font-size: 14px; 
      }
    }
  }
}
</style>
