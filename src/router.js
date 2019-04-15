import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        { path: 'home', component: () => import('./views/Home.vue') },
        { path: 'ident', component: () => import('./views/Ident.vue') },
        { path: 'center', component: () => import('./views/center.vue') },
        { path: '', redirect: '/home' }
      ]
    },
    { path: '*', redirect: '/home' }
  ]
})
