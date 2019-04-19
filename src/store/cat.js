export default {
  namespaced: true,
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
    },
    abc (state) {
      var sum = 0
      state.catData.map(tabs => {
        sum += (tabs.num * tabs.currentPrice) * 100
      })
      return sum
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
}
