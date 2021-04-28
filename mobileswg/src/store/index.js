import Vue from 'vue';
import VueX from 'vuex';

import actions from './actions.js';
import mutations from './mutations.js';

import config from '../config/key.js';

Vue.use(VueX);

export const store = new VueX.Store({
    state: {
        preferences:config.preferences
    },
    mutations,
    actions,
    getters: {
        GetPreferences: (state) => {
            return state.preferences;
        }
    },

})