<script>
import { FontAwesomeIcon } from '@/components/Font-awasome.vue'
export default {
    name : 'GoRide',
    components: {
        'font-awesome-icon': FontAwesomeIcon 
    }
}
</script>

<template>
    <div class="GoRide">

        <h3> Sifarişə başlayın || Qiymət təklifi alın</h3>
        <hr />
        <div class="row">
            <button class="btn btn-light">Tent</button>
            <button class="btn btn-light">Ref</button>
        </div>
        <hr />
        <div class="row GoRide-line">
            <div class="col-2 col-md-1">

                <div class="style-start-line-for-GoRide"></div>
                <div class="style-line-for-GoRide">
                </div>
                <div class="style-stop-line-for-GoRide"></div>
            </div>
            <div class="col-10 col-md-11">
                <input class="form-control" placeholder="Başlanğıc nöqtəsini qeyd edin" />
                <input class="form-control" placeholder="Bitiş nöqtəsini qeyd edin" />
            </div>
            
        </div>
        <hr class=""/>
        <div class="row">
            <div class="col-12">
                <button class="btn btn-info"> <font-awesome-icon icon="fa-brands fa-twitter" /></button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.GoRide {
    width: 100%;
    height: 350px;
    padding: 3% 4%;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    button {
        width: auto;
        margin: 0 0.5%;
    }

    h1 {
        text-align: center;
    }
    input {
        padding: 2% 0;
        background-color:aqua;
        text-align: center;
    }
    input:nth-child(2) {
        margin-top: 6%;
    }

    .GoRide-line {
        padding-left: 5%;
        .style-line-for-GoRide {
            position: absoulute;
            background-color: black;
            width: 1px;
            height: 70%;
        }

        .style-start-line-for-GoRide {
            position: relative;
            background-color: black;
            width: 13px;
            height: 13px;
            left: -6px;
            margin-top: 3px;
        }

        .style-stop-line-for-GoRide {
            width: 0;
            height: 0;
            bottom: 0;
            margin-left: -8px;
            border-style: solid;
            border-width: 16px 8px 0 8px;
            border-color: black transparent transparent transparent;
        }
    }
}
</style>
