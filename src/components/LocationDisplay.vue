<template>
    <div class="location-map" ref="map"></div>
  </template>
  
  <script>
  export default {
    name: 'LocationDisplay',
    data() {
      return {
        apiKey: 'AIzaSyA82dU4xmMTgyOxZneV-NlKh23vLg4v28k', 
        location: {
          lat: 52.4704, 
          lng: -13.3856,
        },
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        const mapOptions = {
          zoom: 8,
          center: this.location,
        };
        this.map = new google.maps.Map(this.$refs.map, mapOptions);
        new google.maps.Marker({
          position: this.location,
          map: this.map,
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .location-map {
    height: 400px; 
    width: 400px;
  }
  </style>
  