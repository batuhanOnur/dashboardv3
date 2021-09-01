<template>
    <div class="home_container">
        <div class="card_container">
            <Header/>

        <div class="second_line">
            <div class="card uretim">
                <div class="uretimChart">
                    <UretimYear/>
                </div>
            </div>
            
            <div class="prespaket_infos">
                <PaketAndPresInfo />
                <div class="card uretimPie">
                    <div class="pieChart">
                        <GunlukUretim />
                    </div>
                </div>
            </div>
        </div>

        <div class="third_line">
            <div class="card uretimLine">
                <div class="stokChart">
                    <ToplamStok />
                </div>
            </div>

            <div class="card paketPie">
                <div class="paketChart">
                    <PaketMamul />
                </div> 
            </div>
        </div>

        <div class="footer">
            <span class="footer__text">Pi Otomasyon Dashboard &copy;</span>
        </div>

        </div>
    </div>
</template>

<script>
//import ProgressBar from '../components/Progressbar.vue'
import UretimYear from '../components/HomePage/UretimYear.vue'
import PaketAndPresInfo from '../components/HomePage/PaketAndPresInfo.vue'
import GunlukUretim from '../components/HomePage/UretimGunlukPie.vue';
import Header from '../components/Layouts/Header.vue';
import ToplamStok from '../components/HomePage/ToplamStok.vue';
import PaketMamul from '../components/HomePage/PaketlenenMamul.vue';


export default {
    components:{
        UretimYear,
        PaketAndPresInfo,
        GunlukUretim,
        Header,
        ToplamStok,
        PaketMamul 
       // ProgressBar,
    }
}
</script>

<style scoped lang="scss">
@import '../scss/main.scss'; 

.second_line,
.third_line {
    display: flex;
}

.footer {
    margin-top: 40px;
}
</style>
