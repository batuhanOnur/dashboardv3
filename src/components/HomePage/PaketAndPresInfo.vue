<template>
    <div class="infopaket">
        <div class="infopaket__pres card">
            <div class="infopaket__pres__bilgi">
                <span class="infopaket__pres__header">Pres 1 Ortalama Net Kapasite</span>
                <span class="infopaket__pres__text">11,50 (ton/saat)</span>
            </div>

            <div class="card__icon_container pres">
                <v-icon class="card__icon_arrow">mdi-arrow-collapse-vertical</v-icon>
            </div>
        </div>
                
        <div class="infopaket__presother card">
            <div class="infopaket__pres__bilgi">
                <strong class="infopaket__pres__header">Pres 2 Ortalama Net Kapasite</strong>
                <span class="infopaket__pres__text">12,50 (ton/saat)</span>
            </div>

            <div class="card__icon_container presother">
                <v-icon class="card__icon_collapse">mdi-arrow-collapse-down</v-icon>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped lang="scss">
@import '../../scss/main.scss'; 

.infopaket {
    display: flex;
    margin-left: 20px;
    &__pres {
        width: 305px;
        margin-right:20px;
        display: flex;
        justify-content: center;
        &__bilgi {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: 20px;
        }
        &__header {
            font-weight: 500;
            color: $headergrey;
        }
        &__text {
            font-weight: 300;
            color: $subgrey;
        }
    }
    &__presother {
        width: 305px;
    }
}
.pres {
    background-color:$backgroundpres;
}
.presother {
    background-color:$backgroundpresother;
}
</style>