<script>
import { Loader } from '@googlemaps/js-api-loader';
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Map',
  data() {
    return {
      DirectionRenderer: '',
      map: '',
      roads : [
        { number: 'M4', name: 'Bakı-Şamaxı-Yevlax', factor: 0.37 },
        { number: 'R22', name: 'Şəmkir-Gədəbəy', factor: 0.37 },
        { number: 'R-8', name: 'Muğanlı-İsmayıllı', factor: 0.37 },
      
      ]
    }
  },
  mounted() {
    const loader = new Loader({
      apiKey: "AIzaSyBBp7fwFegF6SdSDm89VnyxKjjWXmKtR78",
      version: "weekly",
      libraries: ["places"],
      language: 'az',
      region: 'AZ'
    });
    const mapOptions = {
      center: {
        lat: 40.409264,
        lng: 49.867092
      },
      zoom: 7,
      zoomControl: false,
      streetViewControl: false,
      mapTypeControl: false,
      fullscreenControl: false,
    };
    loader.loadCallback(e => {
      if (e) {
        console.log(e);
      } else {
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
      }
      this.DirectionsRenderer = new google.maps.DirectionsRenderer();
      this.DirectionsRenderer.setMap(this.map);
    });
  },
  computed: {
    ...mapState(['OriginAndDestinationPlace']),
  },
  methods: {
    ...mapMutations(['setPayment']),
    // bu funksiya gediş haqlarını hesablamaq üçün yazılmışdır
    CalculatePayment(data,extra) {
      // l deyişəni yolun uzuluğudur (km-lə)
      let l = parseInt(this.getRoadsLength(data.legs[0].distance.text))

      // fix ən aşşağı halda gediş haqqıdır
      const fix = 120
      // uzunluq 100 km ə qədər 1x dən hesablanır sonra daha aşağı
      if (l <= 100){
        l = l*1
      }
      if (l <= 150 && l > 100) {
        l = (l - 100) * 0.8 + 100
      }
      else if (l <= 200 && l > 150) {
        l = (l - 150) * 0.7 + 140
      }
      else if (l <= 300 && l > 200) {
        l = (l - 200) * 0.68 + 175
      }
      else if (l <= 450 && l > 300) {
        l = (l - 300) * 0.66 + 243
      }
      else if (l > 450) {
        l = (l - 450) * 0.63 + 342
      }
      let results = l + fix + extra
      console.log('l: '+l)
      console.log('extra: '+extra)
      console.log('ressult: '+results)
      results = results - results % 5
      return results
    },
    // google maps api den yol uzunluğu text halında gəlir misal:120 km 180 m və s. burada split ilə parçalasaqda bəzən kilometr yerine metr də çıxa bilər belə olan halda ödənişdə səf olacaq.Bu funksiya ona görə yazılıb  
    getRoadsLength(value) {
      let length = value
      length = length.split(" ")
      if (length[1] == "m") {
        length = length[0] * 0.001
      }
      else {
        length = length[0]
      }
      return length;
    },
    // bu funksiya dağ yollarında əlavə pulu hesablamaq üçün yazılmışdır
      filterHeavyRoads(data) {
      let results = 0
      data.forEach(item => {
        for (let index = 0; index < this.roads.length; index++) {
          if (item.instructions.search(this.roads[index].number) > -1 || item.instructions.search(this.roads[index].name) > -1) {
            results += parseInt(this.getRoadsLength(item.distance.text)) * this.roads[index].factor
          }
        }
      });
      return results
    }
  },
  watch: {
    async OriginAndDestinationPlace(newValue, oldValue) {

      const DirectionService = new google.maps.DirectionsService();

      const results = await DirectionService.route(
        {
          origin: { placeId: newValue[0].place_id },
          destination: { placeId: newValue[1].place_id },
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            this.DirectionsRenderer.setDirections(response)
            this.continuation = true

          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      )
      console.log(results)
      const extraPrice = this.filterHeavyRoads(results.routes[0].legs[0].steps)
      console.log(extraPrice)
      this.setPayment(this.CalculatePayment(results.routes[0], extraPrice))
    }
  }

}
</script>
<template>
  <div id="map">

  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#map {
  width: 100%;
  height: 100%;
}
</style>