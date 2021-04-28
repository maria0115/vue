import Router from 'vue-router';
import Vue from 'vue';
import yheader from '../View/yheader.vue';
import HelloWorld from '../components/HelloWorld.vue'
import nheader from '../View/nheader.vue'
// import nheader from '../View/nheader.vue';
Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path: '',
            component: yheader,
            children: [{
                path: '',

                component: HelloWorld
              }, {
                path: 'n',
                
                components: {
                  default: nheader,
                  helper: HelloWorld
                }
              }]
        }
    ]
})