<template>
  <div id="mt-center">
    <header id="mt-center-header">
      <div class="center-header-tittle">
        <div class="header-tittle-imgdai"><img src="//p1.meituan.net/codeman/e32b47a07b818bf9a1d4086a882c18a62282.png" ></div>
        <p class="header-tittle-nikename">{{ getNikename }}</p>
      </div>
    </header>
    <section id="mt-center-content">
         <van-cell-group class="center-content-cell"
         v-for="(items,index) in tags"
         :key="index">
              <van-cell :title="items.name" :icon="items.icons" is-link :to='items.url'/>
          </van-cell-group>
          <van-cell-group>
            <van-cell icon='close' title="退出登录" to="/home" @click="clear" is-link/>
          </van-cell-group>
    </section>
    <footer id="footer">
      <p>客服电话：{{services_phone}}</p>
      <!-- <p>{{ tags[0].name }}</p> -->
    </footer>
    <div class="footer-call">服务时间：9:00-23:00</div>
  </div>
</template>
<script>
import { mapState , mapGetters} from 'vuex'
export default {

  computed: {
    ...mapState(['tags', 'services_phone']),
    ...mapGetters(['getNikename'])
  },
  methods:{
    clear(){
      localStorage.clear()
    }
  }
}
</script>

<style lang="scss">
body{
  background: rgb(240, 240, 240);
}
  #mt-center{
    width: 100%;
    height: auto;
    //头部
    #mt-center-header{
      width: 100%;
      height: 162px;
      padding: 36px 0 18px;
      box-sizing: border-box;
      background: url( //s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/78890a8f1859bc10152151fc64aff5cc.png);
      background-size: cover;
      .center-header-tittle{
        display: flex;
        flex-direction: column;
        align-items: center;
        .header-tittle-imgdai{
              border: 4px solid #ffe699;
              border-radius: 100%;
              box-sizing: border-box;
              width: 90px;
              height: 90px;
             img{
                width: 82px;
                height: 82px;
             }
        }
        .header-tittle-nikename{
                  width: 100%;
                  text-align: center;
                  font-size: 14px;
                  cursor: pointer;
                  color: #333333;
                  max-width: 100%;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
             }
      }
    }
    //内容
    #mt-center-content{
      width: 100%;
      height: auto;
      .center-content-cell{
          background: white;
         .van-cell__title{
           color: #333333;
           font-size: 14px;
          line-height: 20px;
         }
         .van-icon{
           color: #999999;
           font-size: 15px;
         }
      }
    }
    #footer{
          font-size: 14px;
          margin-top: 20px;
          text-align: center;
          color: #ffb000;
          padding: 10px 0;
          background: white;
          box-sizing: border-box;
    }
    .footer-call{
                font-size: 12px;
                text-align: center;
                color: #999999;
                padding: 10px 0;
                margin-bottom: 65px;
          }
  }

</style>
<style>
  @import "../style/reset.css";
</style>
