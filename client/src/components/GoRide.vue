<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        
    }
}
</script>

<template>
    <div class="GoRide">
        <h3> Sifarişə başlayın || Qiymət təklifi alın</h3>
        <hr />
        <div class="row">
            <button class="btn btn-light">
                <font-awesome-icon icon="fa-solid fa-truck-field" />
            </button>
            <button class="btn btn-light">
                <font-awesome-icon icon="fa-solid fa-truck-fast" />
            </button>
        </div>
        <hr />
        <div class="row">
            <div class="col-12">
                <input class="form-control" placeholder="Başlanğıc nöqtəsini qeyd edin" ref="autocomplate" />
                <input class="form-control" placeholder="Bitiş nöqtəsini qeyd edin" />
            </div>
        </div>
        <hr class="" />
        <div class="row">
            <div class="col-12">
                <button class="btn btn-info"> Davam et</button>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.GoRide {
    width: 100%;
    height: 370px;
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
        background-color: aqua;
        text-align: center;
    }

    input:nth-child(2) {
        margin-top: 6%;
    }

}
</style>
