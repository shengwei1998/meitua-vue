import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    //question页面
    questions_tittle: [{
      titl: '支付问题', name: '1',
      content_h3: 'Q：为什么提示我“账户存在异常，无法下单”？',
      content_div: 'Q：在线支付取消订单后钱怎么返还？订单取消后，款项会在一个工作日内，直接返还到您的美团账户余额。'
    },
    {
      titl: '优惠问题', name: '2',
      content_h3: 'Q：为什么提示我“账户存在异常，无法下单”？',
      content_div: 'Q：在线支付取消订单后钱怎么返还？订单取消后，款项会在一个工作日内，直接返还到您的美团账户余额。'
    },
    {
      titl: '订单问题', name: '3',
      content_h3: 'Q：为什么提示我“账户存在异常，无法下单”？',
      content_div: 'Q：在线支付取消订单后钱怎么返还？订单取消后，款项会在一个工作日内，直接返还到您的美团账户余额。'
    },
    {
      titl: '其他问题', name: '4',
      content_h3: 'Q：为什么提示我“账户存在异常，无法下单”？',
      content_div: 'Q：在线支付取消订单后钱怎么返还？订单取消后，款项会在一个工作日内，直接返还到您的美团账户余额。'
    },
  ],
  //center页面
    tags: [
      { name: '美团红包', icons: 'cash-on-deliver', url: '/couponlist' },
      { name: '收货地址', icons: 'location-o', url: '/addresslist' },
      { name: '常见问题', icons: 'question-o', url: '/questions' },
      { name: '美团协议与说明', icons: 'notes-o', url: '/agreement' }
    ],
    services_phone: '10109777',
    //login登录页面
    login_phonenum:localStorage.getItem('pwd') ? JSON.parse(localStorage.getItem('pwd')) : {}
  },
  mutations: {
    addpwd(state,pwds){
      state.login_phonenum[pwds.der]=pwds.tet
      localStorage.setItem('pwd',JSON.stringify(state.login_phonenum))
    },
    removepwd(state){
      state.login_phonenum={}
      localStorage.clear()
    }
  },
  getters: {
    getNikename(state){
      for (const key in state.login_phonenum) {
        if (state.login_phonenum.hasOwnProperty(key)) {
          const element = key;
          return element
        }
      }
    }
  },
  actions: {

  }
})
export default store
