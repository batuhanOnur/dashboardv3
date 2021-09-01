<template>
    <div class="card_first">
            <div class="card lokasyon">
                <div class="lokasyon_card">
                    <div class="card__icon_container">
                        <v-icon class="card__icon">mdi-office-building-outline</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 clasS="card_info__header">Firma</h4>
                        <span class="card_info__text">Tarım Kredi</span>
                    </div>
                </div>

                <div class="lokasyon_card">
                    <div class="card__icon_container marker">
                        <v-icon class="card__icon_marker">mdi-map-marker</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 clasS="card_info__header">Lokasyon</h4>
                        <span class="card_info__text">Sakarya</span>
                    </div>
                </div>
            </div>

            <div class="card second">
                <div class="infos">
                    <div class="card__icon_container barley">
                        <v-icon class="card__icon_barley">mdi-package-variant-closed</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 clasS="card_info__header">30k</h4>
                        <span class="card_info__text">Üretim</span>
                    </div>
                </div>

                <div class="infos">
                    <div class="card__icon_container sack">
                        <v-icon class="card__icon_sack">mdi-sack</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 clasS="card_info__header">600</h4>
                        <span class="card_info__text">Çuval</span>
                    </div>
                </div>

                <div class="infos">
                    <div class="card__icon_container package">
                        <v-icon class="card__icon_package">mdi-barley</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 clasS="card_info__header">40k</h4>
                        <span class="card_info__text">Hammadde</span>
                    </div>
                </div>

                <div class="infos">
                    <div class="card__icon_container food">
                        <v-icon class="card__icon_food">mdi-peanut-outline</v-icon>
                    </div>
                    <div class="card_info">
                        <h4 class="card_info__header">10</h4>
                        <span class="card_info__text">Farklı Yem</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<style scoped lang="scss">
@import '../../scss/main.scss'; 

.barley {
    background-color:$backgroundbarley;
}
.sack {
    background-color:$backgroundsack;
}
.food {
    background-color:$backgroundfood;
}
.marker {
    background-color:$backgroundmarker;
}
.infos {
    display: flex;
    margin-left: 100px;
}
.package {
    background-color:$backgroundpackage;
}
.second {
    margin-left: 20px;
    width: 1000px;
    justify-content: start;
}
.lokasyon {
    width: 500px;
}
.lokasyon_card {
    margin-left: 30px;
    display: flex;
}
</style>