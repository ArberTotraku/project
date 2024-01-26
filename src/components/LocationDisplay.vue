<template>
  <div class="location-map" ref="map"></div>
</template>

<script>
export default {
  name: "LocationDisplay",
  data() {
    return {
      apiKey: "AIzaSyA82dU4xmMTgyOxZneV-NlKh23vLg4v28k",
      location: {
        lat: 52.4704,
        lng: 13.3856,
      },
    };
  },
  mounted() {
    this.initMap();
  },
  methods: {
  loadScript() {
    return new Promise((resolve, reject) => {
      if (typeof google !== "undefined") {
        resolve();
        return;
      }
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => resolve();
      script.onerror = (error) => reject(error);
      document.head.appendChild(script);
    });
  },
  async initMap() {
    try {
      await this.loadScript();
      const mapOptions = {
        zoom: 8,
        center: this.location,
      };
      this.map = new google.maps.Map(this.$refs.map, mapOptions);
      new google.maps.Marker({
        position: this.location,
        map: this.map,
      });
    } catch (error) {
      console.error("Google Maps script failed to load", error);
    }
  },
},

};
</script>

<style scoped>



.location-map{
   width:  250px;
  height: 250px;
  margin: 0 auto;
  
}

</style>
