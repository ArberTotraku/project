<template>
  <div class="app">
    <!-- Sidebar -->
    <Sidebar />
  
    <router-view />
  </div>
  </template>
  
  <script setup>
  import Sidebar from './components/Sidebar.vue';
  </script>
  
  <style lang="scss">
  :root {
    --primary: #4ade80;
    --primary-alt: #22c55e;
    --grey: #64748b;
    --dark: #1e293b;
    --dark-alt: #334155;
    --light: #f1f5f9;
    --sidebar-width: 300px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Fira sans', sans-serif;
  }
  
  body {
    background: var(--light);
  }
  
  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
  }
  
  .app {
    display: flex;
  
    .sidebar {
      width: var(--sidebar-width);
      position: fixed;
      height: 100vh;
      background: var(--dark);
      padding: 2rem 1rem;
      overflow-y: auto;
  
      @media (max-width: 768px) {
        width: 60px; // Smaller width on mobile devices
      }
    }
  
    main {
      flex: 1 1 0;
      margin-left: var(--sidebar-width);
      padding: 2rem;
      overflow-y: auto;
  
      @media (max-width: 1024px) {
        margin-left: 60px; // Adjust based on the smaller sidebar width on mobile
      }
    }
  }
  </style>
  