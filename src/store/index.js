import Vue from 'vue';
import Vuex from 'vuex';

import {signIn} from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            name: '',
            photo: '',
        },
    },
    actions: {
        async signIn({commit}) {
            const account = await signIn();
            commit('setUser', account);
        },
    },
    mutations: {
        setUser(state, {name, photo}) {
            state.user.name = name;
            state.user.photo = photo;
        },
    },
    strict: process.env.NODE_ENV !== 'production',
});
