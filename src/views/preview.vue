<template>
  <div id="mt-preview">
    <van-nav-bar
      title="提交订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="preview-content">
      <van-cell title="55" icon="location" is-link  class="preview-content-adreess" v-if="isshow">
      <template slot="title">
        <div class="tobuy-adreess">{{ list.address }}</div>
        <div class="tobuy-messag">
          <span>55</span>
          <span>55</span>
          <span>55</span>
        </div>
      </template>
    </van-cell>
     <van-cell title="55" icon="add" is-link class="preview-content-yellow" v-else
      @click="toadress">
      <template slot="title">
        <div class="tobuy-adreess">选择收货地址</div>
      </template>
    </van-cell>
    <van-cell title="55" icon="clock" is-link class="preview-content-time">
      <template slot="title">
        <div class="tobuy-adreess">立即送出</div>
        <div class="tobuy-time">(大约19：07送达)</div>
      </template>
    </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // isshow:false,
      list: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    toadress () {
      this.$router.push('/addresslist')
    }
  },
  activated () {
    this.list = this.$route.params.sks
  },
  computed: {
    isshow () {
      if (this.list === '') {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style lang="scss">
body {
  background: #f4f4f4;
}
#mt-preview {
  .van-nav-bar {
    margin-bottom: 10px;
  }
 .preview-content{
   margin: 10px;
    .preview-content-adreess {
    width: 100%;
    height: 100%;
    .tobuy-adreess {
      font-weight: bold;
      font-size: 15px;
      color: #333333;
      margin-bottom: 3px;
      height: 21px;
      line-height: 21px;
      margin-left: 10px;
    }
    .tobuy-messag {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 20px;
      line-height: 20px;
      color: #777777;
      span {
        display: inline-block;
        vertical-align: top;
        max-width: 80px;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0 10px;
      }
    }
  }
  .preview-content-yellow{
       color: #FFB000;
    .van-cell__title{
        display: flex;
    }
    .tobuy-adreess {
      font-weight: bold;
      font-size: 15px;
      color: #FFB000;
      margin-bottom: 3px;
      height: 21px;
      line-height: 21px;
      margin-left: 10px;
    }
  }
  .preview-content-time {
    .van-cell__title{
        display: flex;
    }
     .tobuy-adreess {
      font-weight: bold;
      font-size: 15px;
      color: #333333;
      margin-bottom: 3px;
      height: 21px;
      line-height: 21px;
      margin-left: 10px;
    }
    .tobuy-time{
    padding-right: 24px;
    box-sizing: border-box;
    display: inline-block;
    margin-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    color: #348BED;
    height: 21px;
    line-height: 21px;
    vertical-align: middle;
    }
  }
 }
}
</style>
