<template>
<div id="chart-demo">
    <DxChart
    id="chart"
    :data-source="sharingStatisticsInfo"
    palette="Ocean"
    title="Toplam Hammadde Stok Miktarı"
    >
        <DxCommonSeriesSettings
        :type="type"
        argument-field="gun"
        />
        <DxCommonAxisSettings>
        <DxGrid :visible="true"/>
        </DxCommonAxisSettings>
        <DxSeries
        value-field="stok"
        name="Miktar"
        />
        <DxMargin :bottom="20"/>
        <DxArgumentAxis
        :allow-decimals="false"
        :axis-division-factor="60"
        >
        <DxLabel>
            <DxFormat type="decimal"/>
        </DxLabel>
        </DxArgumentAxis>
        <DxLegend
        vertical-alignment="top"
        horizontal-alignment="right"
        />
        <DxSize :height="400" :width="800"/>
        <DxExport :enabled="false"/>
        <DxTooltip :enabled="true"/>
    </DxChart>
</div>
</template>
<script>

import {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxCommonAxisSettings,
    DxGrid,
    DxExport,
    DxLegend,
    DxMargin,
    DxTooltip,
    DxLabel,
    DxFormat,
    DxSize
} from 'devextreme-vue/chart';

import { architectureSources, sharingStatisticsInfo } from '../../fakeDatas/toplamStok';

export default {

    components: {
    DxChart,
    DxSeries,
    DxArgumentAxis,
    DxCommonSeriesSettings,
    DxCommonAxisSettings,
    DxGrid,
    DxExport,
    DxLegend,
    DxMargin,
    DxTooltip,
    DxLabel,
    DxFormat,
    DxSize
},

    data() {
    return {
        sharingStatisticsInfo,
        architectureSources,
        types: ['spline', 'stackedspline', 'fullstackedspline'],
        type: 'spline'
        };
    }
};
</script>
<style>
.options {
    padding: 20px;
    background-color: rgba(191, 191, 191, 0.15);
    margin-top: 20px;
}

.option {
    margin-top: 10px;
}

.caption {
    font-size: 18px;
    font-weight: 500;
}

.option > span {
    margin-right: 14px;
}

.option > .dx-widget {
    display: inline-block;
    vertical-align: middle;
}
</style>