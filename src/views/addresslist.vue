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
    />
  </div>
</template>
<script>
import { mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
      chosenAddressId: '1',
      list: localStorage.getItem('arddress') ? JSON.parse(localStorage.getItem('arddress')) :[]
    }
  },
  computed:{
    ...mapState([ 'adressd' ]),
    listNew(){
       let abc = this.list
      for (let i = 0; i < abc.length; i++) {
        const element = abc[i];
        element.id=i
        element.address=element.addressDetail
      }
      return abc || []
    }
  },
  methods: {
    onAdd () {
      this.$router.push('/address-edit')
    },

    onClickLeft(){
      this.$router.back()
    }
  }
}
</script>
