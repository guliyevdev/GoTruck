<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import GoRide from '@/components/GoRide.vue'
import GoMap from '@/components/GoMap.vue'
import Map from '@/components/Map.vue'
import Slider from '@/components/Slider.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    GoRide,
    GoMap,
    Slider,
    Map
  },
}
</script>

<template>
  <Header />
  <div class="first-area">
    <div class="container-fluid">
      <div class="row">
        <!--         
        <div class="col-12 col-md-6">
          <GoRide /> -->
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

        <!-- </div>
        <div class="col-6 second-column">
          <GoMap />
        </div>
         -->
        <div class="col-12 Map-area">
          <Map />
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="second-area">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, maxime.</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos minus numquam consectetur ut soluta vero earum recusandae quos, obcaecati magni adipisci cumque reiciendis mollitia quisquam doloremque? Praesentium doloremque exercitationem impedit, eaque quibusdam suscipit voluptate ipsum! Eius a eaque iure! Ea cum nihil eius inventore vitae aliquid deleniti ex soluta nulla!</p>
          <button class="btn btn-light"> Show More</button>
        </div>
        <div class="col-12 col-md-6">
          <img src="https://www.pispl.in/images/Freight_ex.jpg" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
        </div>
        <div class="col-12 col-md-6">
          <h2>NƏ necə işləyir?</h2>
        <img src="https://www.pispl.in/images/Freight_ex.jpg" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia vero doloribus vitae ipsam error debitis sit accusantium corrupti perferendis consectetur dolorem recusandae ad quam at autem iusto sequi aliquid ducimus iure quos dicta enim fugiat. Architecto ullam enim aliquam veritatis, assumenda exercitationem ad cumque nihil nemo perferendis fuga maiores odit dignissimos laboriosam optio reprehenderit? Iusto deserunt dolor eveniet quia asperiores, omnis corrupti fugiat modi minus ipsam. Rem asperiores est, ipsum provident doloremque maxime tempore quae magni dolores. Doloremque placeat provident architecto. Odit tempora pariatur ad, voluptatem quod ea quibusdam eos ratione similique saepe illum? Impedit quia illum ut quaerat aperiam similique, sunt amet quam, voluptatem explicabo natus aliquam quod maxime? Sunt molestias, repudiandae autem eos eum a distinctio aliquid eligendi earum assumenda perspiciatis culpa nisi expedita suscipit minima maiores quis voluptates nulla fuga ab laboriosam. Ab dolores ut illum sed fuga, aut commodi. Porro ut quod iusto.</p>
          <button class="btn btn-light"> Show More</button>
        </div>
      </div>
    </div>
  </div>
  <div class="third-area">
    <div class="container">
      <h1>Ən çox verilən suallar</h1>
      <div class="row">
        <div class="col-3">
          <div class="box">
            <a >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque.</a>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <a >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque.</a>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <a >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque.</a>
          </div>
        </div>
        <div class="col-3">
          <div class="box">
            <a >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, doloremque.</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer /> -->
</template>
<style scoped lang="scss">
.first-area {
  height: 80%;
  div {
    height: 100%;
  }
  .row {
    display: flex;
    align-items: center;

    .Map-area {
      display: flex;
      justify-content: flex-start;
      padding-left: 0 !important;
      padding-right: 0 !important;
    }
  }
}
</style>