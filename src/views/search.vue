<template>
  <div>
   <van-nav-bar
      title="标题"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <van-search
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
    >
  <div slot="action" @click="onSearch">搜索</div>
</van-search>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    onSearch () {
      console.log(11)
    }
  }
}
</script>
