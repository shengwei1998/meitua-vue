import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        { path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: { tabNumber: 0 },
          children: [
            { path: 'synthesize', component: () => import('./components/synthesize.vue') },
            { path: 'topselling', component: () => import('./components/topselling.vue') },
            { path: '', redirect: '/home/synthesize' }
          ]
        },
        { path: 'ident',
          component: () => import('./views/Ident.vue'),
          beforeEnter: (to, from, next) => {
            var islogin = false
            if (!islogin) {
              next('/login')
            } else {
              next()
            }
          }
        },
        { path: 'center',
          component: () => import('./views/center.vue'),
          beforeEnter: (to, from, next) => {
            var islogin = false
            if (!islogin) {
              next('/login')
            } else {
              next()
            }
          }
        },
        { path: '', redirect: '/home' }
      ]
    },
    { path: '/couponlist', component: () => import('./views/couponlist.vue') },
    { path: '/addresslist', component: () => import('./views/addresslist.vue') },
    { path: '/address-edit', component: () => import('./views/address-edit.vue') },
    { path: '/questions', component: () => import('./views/questions.vue') },
    { path: '/couponlist', component: () => import('./views/couponlist.vue') },
    { path: '/login', component: () => import('./views/login.vue') },
    { path: '/detail/:id', name: 'detail', component: () => import('./views/detail.vue') },
    { path: '*', redirect: '/home' }
  ]
})
