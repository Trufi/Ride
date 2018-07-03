<template>
    <div>
        <mapbox
            access-token="pk.eyJ1IjoidHJ1ZmkiLCJhIjoiY2lrcW1pdzU4MDEyanUwbTIwZzJ1bmY4dSJ9.5qW-pRcgah2nQIWpGKwHRg"
            :map-options="{
                style: 'mapbox://styles/trufi/cjil6e9qp146w2sozewzwzlnk',
                center: [83.09598, 54.85404],
                zoom: 14,
                attributionControl: false,
            }"
            :style="{width: '100%', height: '100%'}"
        ></mapbox>
        <test :style="{position: 'absolute', top: 0, left: 0}"/>
    </div>
</template>

<script>
import Mapbox from 'mapbox-gl-vue';
import Test from './Test.vue';

export default {
    components: {
        Mapbox,
        Test,
    }
}
</script>

<style scoped>
</style>
