<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoRide from '@/components/GoRide.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    GoRide
  }
}
</script>

<template>
  <Header />
  <div class="first-area">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <GoRide />
          <!-- <div class="group-png"></div>
          <h1>Take your relationships to the next level</h1>
          <p>The multichannel sales engagement platform which automates personal email outreach, calls, and tasks, while
            Sales can focus on what really matters - closing deals.</p>
          <form class="row g-3">
            <div class="col-8 first-column">
              <input type="text" id="staticEmail2" placeholder="Email id">
            </div>
            <div class="col-4">
              <button type="submit" class="round-button-primary">Try it for free</button>
            </div>
          </form> -->
        
        </div>
        <div class="col-6 second-column">

        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
<style scoped lang="scss">
.first-area {
  .row {
    height: 500px;
    display: flex;
    align-items: center;
  }
}
</style>