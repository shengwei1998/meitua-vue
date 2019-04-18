import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    catData: localStorage.getItem('catData') ? JSON.parse(localStorage.getItem('catData')) : []
  },
  getters: {
    goodCatNum (state) {
      var total = 0
      state.catData.map(item => {
        total += item.num
      })
      return total
    }
  },
  mutations: {
    catAdd (state, good) {
      var index = state.catData.findIndex(item => item.goodId === good.goodId)
      if (index > -1) {
        state.catData[index].num += 1
      } else {
        state.catData.push(Object.assign({}, good, { num: 1 }))
      }
      localStorage.setItem('catData', JSON.stringify(state.catData))
    },
    catReduce (state, good) {
      var index = state.catData.findIndex(item => item.goodId === good.goodId)
      if (index > -1) {
        if (state.catData[index].num === 1) {
          state.catData.splice(index, 1)
        } else {
          state.catData[index].num -= 1
        }
      }
      localStorage.setItem('catData', JSON.stringify(state.catData))
    }
  }
})

export default store
