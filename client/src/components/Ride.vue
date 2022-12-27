<script>
import { Loader } from '@googlemaps/js-api-loader';
import Map from '@/components/Map.vue'
import { mapMutations } from 'vuex';

export default {
  name: 'Ride',
  data() {
    return {
      OriginPlace: '',
      DestinationPlace: '',
      map: '',
      continuation: false,
    }
  },
  components: {
    Map
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyBBp7fwFegF6SdSDm89VnyxKjjWXmKtR78",
      version: "weekly",
      libraries: ["places"],
      language: 'az',
      region: 'AZ'
    });
    loader.loadCallback(e => {
      this.OriginPlace = new google.maps.places.Autocomplete(
        this.$refs["origin"],
        { fields: ["place_id"] }
      );
      this.DestinationPlace = new google.maps.places.Autocomplete(
        this.$refs["destination"],
        { fields: ["place_id"] }
      );
    });
  },
  methods: {
    ...mapMutations(['setRoute']),
    
    async setRoutemethod() {
      const OriginAndDestinationPlace = [this.OriginPlace.getPlace(),this.DestinationPlace.getPlace()]
      this.setRoute(OriginAndDestinationPlace)
    },

  },
  

}
</script>
<template>
  <div class="calculateMap" >
      <div class="row">
        <div class="col-12">
          <h5>Başlanğıc və son nöqtələri seçin.</h5>
          <hr />
        </div>
        <div class="col-12 ">
          <input type="text" placeholder="Origin" v-model="data" ref="origin" @change="continuation = false" />
          <input type="text" placeholder="Destination" ref="destination" @change="continuation = false" />
          <p v-if="continuation">Qeyd etdiyniz məkanlar üzrə yol tapıldı. Xaiş edirik <b>Davam et</b> düyməsini click edin.</p>
          <button v-if="continuation">Davam et</button>
          <button v-else @click="setRoutemethod">Yoxla</button>
          <!-- <p> Distance: <b>{{ Distance }}</b> </p> -->
        </div>
      </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  width: 100%;
  height: 100%;
}

.calculateMap {
  z-index: 1;
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  opacity: 100%;
  transition: 0.6s;
  height: auto !important;
  button {
    position: relative;
    top: 0px;
    padding: 15px 25px;
    border: solid #1a1a1a 3px;
    border-radius: 20px;
    margin: 10px;
    box-shadow: 0px 10px 0px #1a1a1a;
  }

  button {
    background: #ffc300;
  }

  button:hover {
    background: #efb300;
  }

  button:active {
    background: #dfa300;
  }

  input {
    width: 100%;
    border: 1px solid blanchedalmond;
    border-radius: 10px;
    margin: 2% 0;
    height: 40px;
  }
}

.calculateMap:hover {
  opacity: 100%;
}
</style>