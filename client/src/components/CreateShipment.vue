<script>
import { mapState } from 'vuex'

export default {

    data() {
        return {
            status: 1
        }
    },
    computed: {
        ...mapState(['payment']),
    },
    methods: {
        setStatus(number) {
            if (this.status == number) {
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
    <div class="row">
        <h5 class="col-12 order-title-two">Yükdaşınma məlumatları.</h5>
        <div class="col-12">
            <div class="card">
                <div class="row">
                    <div class="col-12 col-md-4 card-body">
                        <div class="row">
                            <h6 class="col-12">Maşının tipi və kriteriyalarını qeyd edin.</h6>
                            <p class="select-info col-12">Nəqliyyat vasitəsinin kateqoriyasını seçin.</p>
                            <div class="select-main col-12">
                                <button class="btn" :class="[{ 'btn-success': status == 1 }, { 'btn-light': !status }]"
                                    @click="setStatus(1)">TIR</button>
                                <button class="btn" disabled
                                    :class="[{ 'btn-success': status == 2 }, { 'btn-light': !status }]"
                                    @click="setStatus(2)">Yük maşını</button>
                            </div>
                            <div class="col-12 info" v-show="status == 1">
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>Yük götürmə</td>
                                            <td class="text-end">24t</td>
                                        </tr>
                                        <tr>
                                            <td>En</td>
                                            <td class="text-end">2.5m</td>
                                        </tr>
                                        <tr>
                                            <td>Uzunluq</td>
                                            <td class="text-end">13.6m</td>
                                        </tr>
                                        <tr>
                                            <td>Hündürlük</td>
                                            <td class="text-end">2.8m-3m</td>
                                        </tr>
                                        <tr>
                                            <td>Həcm</td>
                                            <td class="text-end">96&#13221; - 105&#13221;</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 card-body">
                        <div class="row">
                            <h6 class="col-12">Yük məlumatları qeyd edin.</h6>
                            <p class="select-info col-12">Yükün çəkisi.</p>
                            <div class="select-main col-12">
                                <select class="form-select" aria-label="Default select example">
                                    <option :value="n" v-for="n in 24">{{ n }} ton</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 card-body">
                        <div class="row">
                            <h6 class="col-12">Qiymət.</h6>
                            <p class="select-info col-12">Təklif olunan qiymət.</p>
                            <div class="select-main col-12" v-show="payment">
                                <h5>{{ payment }}&nbsp; </h5>
                                <p>manat</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped lang="scss">
.order-title-two {
        margin: 25px 0;
        }
.card-body  {
        h6 {
            text-align: center;
        }
        
        .select-info {
            margin-bottom: 0;
            text-align: center;
            color: #6c757d;
        }
        .select-main {
            display: flex;
            justify-content: center;
            p {
                color: #6c757d;
            }
            button {
                margin: 1%;
            }
        }
        .info {
            margin-top: 5%;
        }
    }
</style>