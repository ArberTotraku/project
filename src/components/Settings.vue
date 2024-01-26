<template>
    <div class="menu">
      <button @click="toggleDarkMode" class="button">
        <span class="material-icons">{{ darkMode ? 'brightness_4' : 'brightness_7' }}</span>
        <span class="text">{{ darkMode ? 'Dark Mode' : 'Light Mode' }}</span>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ModeToggle',
    data() {
      return {
        darkMode: false,
      };
    },
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-mode', this.darkMode);
      },
    },
  };
  </script>
  
  <style scoped>
  .dark-mode {
    background-color: #121212;
    color: white;
  }
  
  .menu .button {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .material-icons {
    font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-in-out;
    
  }
  </style>
  