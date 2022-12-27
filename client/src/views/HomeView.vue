<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Ride from '@/components/Ride.vue'
import Map from '@/components/Map.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Map,
    Ride,
    Main
  },
}
</script>

<template>
  <Header />
  <Main />
  <Footer />
</template>
<style scoped lang="scss">

</style>