<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="orange">
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="balance-list-o" to="/ident">订单</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/center">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    let tabNumber = this.$route.meta.tabNumber
    return {
      active: tabNumber
    }
  }
}
</script>
