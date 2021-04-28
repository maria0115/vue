
import Router from 'vue-router';
import Vue from 'vue';
import Preferences from '../View/Preferences.vue';
import Allim from '../components/preperence/allim.vue';
import Dark from '../components/preperence/dark.vue';
import Etiq from '../components/preperence/etiq.vue';
import Font from '../components/preperence/font.vue';
import Num from '../components/preperence/num.vue';
import Screen from '../components/preperence/screen.vue';

// import nheader from '../View/nheader.vue';
Vue.use(Router);

export default new Router({
    mode:'history',
    base: process.env.BASE_URL,
    routes:[
      {
        path: '/',
        component: Preferences,
    },
        {
            path: '/setting',
            component: Preferences,
        },{
          path: '/alarm',
          component: Allim
        },{
          path: '/dark',
          component: Dark
        },{
          path: '/etiq',
          component: Etiq
        },{
          path: '/font',
          component: Font
        },{
          path: '/num',
          component: Num
        },{
          path: '/screen',
          component: Screen
        }
    ]
})