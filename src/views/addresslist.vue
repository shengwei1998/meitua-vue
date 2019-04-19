<template>
  <div>
    <van-nav-bar
        title="地址列表"
        left-arrow
        @click-left="onClickLeft"
      />
    <van-address-list
      v-model="chosenAddressId"
      :list="listNew"
      @add="onAdd"
      @select="secaddress"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      chosenAddressId: ''
      // list: localStorage.getItem('arddress') ? JSON.parse(localStorage.getItem('arddress')) : []
    }
  },
  computed: {
    ...mapState([ 'adressd' ]),
    listNew () {
      let abc = this.adressd ? JSON.parse(JSON.stringify(this.adressd)) : []
      for (let i = 0; i < abc.length; i++) {
        const element = abc[i]
        element.id = i
        element.address = element.addressDetail
      }
      return abc || []
    }
  },
  methods: {
    onAdd () {
      this.$router.push('/address-edit')
    },
    secaddress(item,index){
      this.$router.push({name:'preview',params:{ sks: item }})
      this.$store.commit('saveadress', item)
    },
    onClickLeft () {
      this.$router.back()
    }
  }
}
</script>
