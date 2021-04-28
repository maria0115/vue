import Router from 'vue-router';
import Vue from 'vue';
import NewsView from '../view/NewsView.vue';
import AskView from '../view/AskView.vue';
import JobsView from '../view/JobsView.vue';
import UserView from '../view/UserView.vue';
import ItemView from '../view/ItemView.vue';
import store from '../store/index.js';
import bus from '../utils/bus.js';

Vue.use(Router);

export default new Router({
    mode:'history',
    routes:[
        {
            path: '/',
            redirect:'/news'
        },
        {
            path:'/news',
            component:NewsView,
            name: 'news',
            beforeEnter(to,from,next){
                bus.$emit('start:spinner');
                store.dispatch("GetItems","news")
                .then(()=>{
                    
                    next();
                    bus.$emit('end:spinner')
                })
                .catch(()=>console.error());
            }
        },
        {
            path:'/ask',
            component:AskView,
            name: 'ask',
            beforeEnter(to,from,next){
                bus.$emit('start:spinner');
                store.dispatch("GetItems","ask")
                .then(()=>{
                    next()
                    bus.$emit('end:spinner');
                })
                .catch(()=>console.error());
            }
        },
        {
            path:'/jobs',
            component:JobsView,
            name: 'jobs',
            beforeEnter(to,from,next){
                bus.$emit('start:spinner');
                store.dispatch("GetItems","jobs")
                .then(()=>{
                    next()
                    bus.$emit('end:spinner');
                })
                .catch(()=>console.error());
            }
        },
        {
            path:'/user/:id',
            component:UserView
        },
        {
            path:'/item/:id',
            component:ItemView
        },

    ]
})