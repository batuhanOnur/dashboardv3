<template>
<DxChart
    id="chart"
    :data-source="dataSource"
    palette="Dark Violet"
    @point-click="onPointClick"
>
    <DxCommonSeriesSettings
    :ignore-empty-points="true"
    argument-field="ay"
    value-field="miktar"
    type="bar"
    />
    <DxSeriesTemplate name-field="yem"/>
    <DxTitle
    text="Yıllık Üretim"
    />
    <DxSize
    :height="280"
    :width="850"
    />
</DxChart>
</template>
<script>
import {
    DxChart,
    DxSeriesTemplate,
    DxCommonSeriesSettings,
    DxTitle,
    DxSize
} from 'devextreme-vue/chart';

import { uretimYillik } from '../../fakeDatas/uretimYillik.js';

export default {
components: {
    DxChart,
    DxSeriesTemplate,
    DxCommonSeriesSettings,
    DxTitle,
    DxSize,
},
    data() {
    return {
        dataSource: uretimYillik
    };
},
    methods: {
    onPointClick({target: series}){
        this.$router.push({
            name: 'aylikuretim',
            params: {
                    month: series.argument
                }
            });
        }
    }
};
</script>
<style>
#chart {
    height: 440px;
}
</style>