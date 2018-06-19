import Mapbox from 'mapbox-gl-vue';

import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
    },
    components: {Mapbox},
});
