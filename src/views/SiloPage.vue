<template>
    <div class="silolar">
        <div class="silolar__header">
            <h2>Hammadde Siloları</h2>
        </div>
        
        <div class="silolar__cards">
            <SiloCard />
        </div>
    </div>
</template>

<script>
import SiloCard from '../components/SiloPage/SiloCard.vue'

export default {
    components: {
        SiloCard,
    }
}
</script>

<style scoped lang="scss">
@import '../scss/main.scss';

.silolar{
    &__header{
        margin: 50px 0 0 20px;
    }
}

.silo_grid {
    max-width: 500px;
    margin: 50px 0 50px 20px;
}
.grid_header {
    margin: 50px 0 0 25px;
}

</style>