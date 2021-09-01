<template>
    <DxPieChart
    id="pie"
    :data-source="olympicMedals"
    type="doughnut"
    title="Günlük Üretim"
    palette="Ocean"
    @point-click="pointClickHandler"
    >
    <DxSeries
    argument-field="country"
    value-field="medals"
    >

    <DxHoverStyle color="#ffd700"/>
    </DxSeries>
    <DxExport :enabled="false"/>
    <DxLegend
    :margin="0"
    horizontal-alignment="right"
    vertical-alignment="top"
    />
    <DxSize 
        :height='180'
        :width='500'
    />
    </DxPieChart>
</template>
<script>
import DxPieChart, {
    DxLegend,
    DxSeries,
    DxExport,
    DxHoverStyle,
    DxSize
} from 'devextreme-vue/pie-chart';

import { olympicMedals } from '../../fakeDatas/gunlukUretim';

export default {
    components: {
        DxPieChart,
        DxLegend,
        DxSeries,
        DxExport,
        DxHoverStyle,
        DxSize
    },
    data() {
    return {
        olympicMedals
        };
    },
    methods: {
    pointClickHandler({ target }) {
        target.select();
        }
    }
};
</script>
<style>
#pie {
    height: 440px;
}
</style>