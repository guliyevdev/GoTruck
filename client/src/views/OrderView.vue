<script>
import Header from '@/components/Header.vue'
import Map from '@/components/Map.vue'
import Ride from '@/components/Ride.vue'
import { mapState } from 'vuex'
import createShipment from '@/components/CreateShipment.vue'

export default {
    name: 'OrderView',
    components: {
        Header,
        Map,
        Ride,
        createShipment
    },
    data(){
        return { 
            status: false
        }
    },
  computed: {
    ...mapState(['payment']),
  },
    methods: {
        setStatus(number) {
            if (this.status == number){
                this.status = false
            }
            else {
            this.status = number
            console.log(this.status)
            }
        }
    }
}
</script>
<template>
    <div class="OrderArea">
        <div class="container">
            <div class="row">
                <h3 class="col-12 order-title-one">Yeni yük əlavə edin.</h3>
                <div class="col-12 col-sm-6">
                    <Ride class="" />
                </div>
                <div class="col-12 col-sm-6 "> <Map class="map" /></div>
                <div class="col-12 ship_information"></div>
            </div>

            <createShipment />
        </div>
    </div>
</template>
<style scoped lang="scss">
.OrderArea {
    .order-title-one {
        margin: 30px 0;
    }


    

    .map {
        height: 300px;
    }
}
</style>