import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/Index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('./views/Home.vue'),
          meta: { tabNumber: 0 },
          children: [
            { path: 'synthesize', component: () => import('./components/synthesize.vue') },
            { path: 'topselling', component: () => import('./components/topselling.vue') },
            { path: '', redirect: '/home/synthesize' }
          ]
        },
        {
          path: 'ident',
          component: () => import('./views/Ident.vue'),
          meta: { tabNumber: 1 },
          beforeEnter: (to, from, next) => {
            if (!localStorage.getItem('pwd')) {
              next('/login')
            } else {
              next()
            }
          }
        },
        {
          path: 'center',
          component: () => import('./views/center.vue'),
          meta: { tabNumber: 2 },
          beforeEnter: (to, from, next) => {
            // var islogin=false;
            if (!localStorage.getItem('pwd')) {
              next('/login')
            } else {
              next()
            }
          }
        },
        { path: '', redirect: '/home' }
      ]
    },
    { path: '/detail/:id', name: 'detail', component: () => import('./views/detail.vue') },
    { path: '/couponlist', component: () => import('./views/couponlist.vue') },
    { path: '/addresslist', component: () => import('./views/addresslist.vue') },
    { path: '/address-edit', component: () => import('./views/address-edit.vue') },
    { path: '/questions', component: () => import('./views/questions.vue') },
    { path: '/couponlist', component: () => import('./views/couponlist.vue') },
    { path: '/login', component: () => import('./views/login.vue') },
    { path: '/search', component: () => import('./views/search.vue') },
    { path: '/preview/:sks', name:'preview' ,component: () => import('./views/preview.vue') },
    { path: '*', redirect: '/home' }
  ]
})

router.beforeEach((to, from, next) => {
  next()
})

export default router
