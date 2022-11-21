<template>

</template>
  
<script>
export default {
  data() {
    return {
      openedMarkerID: null,
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          id: 1,
          position: {
            lat: 51.093048,
            lng: 6.84212
          }
        },
        {
          id: 2,
          position: {
            lat: 51.198429,
            lng: 6.69529
          }
        }
      ]
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id
    }
  }
};
</script>
  
<style>
body {
  margin: 0;
}
</style>