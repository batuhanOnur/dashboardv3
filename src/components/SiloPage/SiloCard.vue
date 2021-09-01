<template>
<div class="cardsilos_container">
    <div class="silos_wrapper card">
        <div v-for="silo in tempSilo" :key="silo.siloAdı">
            <h6 class="silo_text silo_header">{{silo.siloAdı}}</h6>
            <div class="card_container">
                <div class="silo_percent">
                    <h6 class="silo_text">50%</h6>
                </div>
            <div class="stok"></div>
                <div class="silo_info">
                    <h6 class="silo_text">{{silo.malzeme}}</h6>
                </div>
            </div>
        </div>
    </div>

    <div class="silos_wrapper card">
        <div v-for="silo in this.tempSiloSecond" :key="silo.siloAdı">
            <h6 class="silo_text silo_header">{{silo.siloAdı}}</h6>
            <div class="card_container">
                <div class="silo_percent">
                    <h6 class="silo_text">50%</h6>
                </div>
            <div class="stok"></div>
                <div class="silo_info">
                    <h6 class="silo_text">{{silo.malzeme}}</h6>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { dataSource } from '../../fakeDatas/siloDatas'

export default {
    data() {
        return {
            silos: dataSource,
            tempSilo: [],
            tempSiloSecond: [],
        };
    },
    
    methods: {
    arrangeSilos(){
            let length = this.silos.length;
            this.tempSilo = this.silos.slice(0,length/2)
            this.tempSiloSecond = this.silos.slice(length/2,length);
        }
    },
    mounted() {
        this.arrangeSilos()
    }
}
</script>

<style scoped lang="scss">
@import '../../scss/main.scss';

.silos_container {
    display: flex;
    flex-direction: column;
    //@errorjustify-content: center;
    align-items: center;
}
.silos_wrapper {
    display: flex;
    width: 1500px;
    height: 320px;
    margin-left: 30px;
}
.card_container {
    width: 50px;
    height: 250px;
    background-color: $silocolor;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    position: relative;
    border: 1px solid $siloborder;
}
.silo_header {
    margin: 20px;
    margin-left: 27px;
    color: #09adc5 !important;
}
.stok {
    background-color: $silostok;
    position: absolute;
    border-radius: 10px;
    bottom: 0;
    width: 100%;
    height: 50%;
}
.silo_info {
    z-index: 5;
    transform: rotate(-90deg);
}
.silo_percent {
    position: absolute;
    top:0;
}
.silo_text {
    color:$silotext;
}
</style>