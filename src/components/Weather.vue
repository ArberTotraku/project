<template>
    <div class="weather-widget">
      <h3>Weather Information</h3>
      <form @submit.prevent="fetchWeather">
        <input v-model="city" placeholder="Enter city name" />
        <button class="button" type="submit">Get Weather</button>
      </form>
      <div v-if="weather">
        <h4>{{ weather.location.name }}, {{ weather.location.country }}</h4>
        <p>Temperature: {{ weather.current.temp_c }}°C</p>
        <p>Condition: {{ weather.current.condition.text }}</p>
        <img :src="weather.current.condition.icon" alt="Weather Icon">
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        city: '',
        weather: null,
      };
    },
    methods: {
      async fetchWeather() {
        try {
          const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=35b97c8b19214737a0e144321231302&q=${this.city}&aqi=no`);
          this.weather = response.data;
        } catch (error) {
          console.error("Error fetching weather data:", error);
          this.weather = null; 
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .weather-widget {
    background-color: #007BFF; 
    color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 5% auto;
    width: 90%;
    max-width: 400px;
    text-align: center;
  
    h3 {
      margin-bottom: 15px;
    }
  
    form {
      display: flex;
      flex-direction: column;
  
      input {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
  
      .button {
        padding: 10px;
        background-color: #FF6347;
        border-radius: 4px;
        margin-top: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
  
        &:hover {
          background-color: darken(#FF6347, 10%);
        }
      }
    }
  
    div {
      margin-top: 20px;
  
      h4 {
        margin-bottom: 10px;
      }
  
      p {
        margin: 5px 0;
      }
  
      img {
        margin-top: 10px;
      }
    }
  }
  
  @media (max-width: 600px) {
    .weather-widget {
      width: 95%;
      padding: 15px;
      margin-top: 10%;
      h3 {
        font-size: 1.2rem;
      }
    }
  }
  </style>
  