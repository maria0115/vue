import Vue from 'vue';
import VueX from 'vuex';
import mutations from './mutations.js';
import actions from './actions.js';

Vue.use(VueX);

export default new VueX.Store({
    state: {
        hi: 'hi',
        news: {},
        user: {},
        ask: [],
        jobs: {},
        items:{},
    },
    mutations,
    actions,
    getters: {
        Items(state) {
            // console.log(state.news);
            return state.items
        }
    }
})