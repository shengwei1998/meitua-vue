import Vue from 'vue'
import Vuex from 'vuex'
 Vue.use(Vuex)

 const store = new Vuex.Store({
   state:{
    tags:[
      {name:'美团红包',icons:'cash-on-deliver',url:'/couponlist'},
      {name:'收货地址',icons:'location-o',url:'/addresslist'},
      {name:'常见问题',icons:'question-o',url:'/questions'},
      {name:'美团协议与说明',icons:'notes-o',url:'/agreement'},
      {name:'退出登录',icons:'close',url:'/'},
    ],
    services_phone:'10109777'
   },
   mutations:{

   },
   getters:{

   },
   actions:{

   }
 })
 export default store
