import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        { path: 'home',
          component: () => import('./views/Home.vue'),
          meta: { tabNumber: 0 },
          children: [
            { path: 'synthesize', component: () => import('./components/synthesize.vue') },
            { path: 'topselling', component: () => import('./components/topselling.vue') },
            { path: '', redirect: '/home/synthesize' }
          ]
        },
        { path: 'ident', component: () => import('./views/Ident.vue'), meta: { tabNumber: 1 } },
        { path: 'center', component: () => import('./views/center.vue'), meta: { tabNumber: 2 } },
        { path: '', redirect: '/home' }
      ]
    },
    { path: '/detail', component: () => import('./views/detail.vue') },
    { path: '*', redirect: '/home' }
  ]
})
