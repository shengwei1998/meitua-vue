<template>
  <div>
    <header id="login-header">
      <section class="mt-login-header">
        <img src="//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/7a5ff05b334e0debdd10954a7f5d4789.png" alt="kkkmt">
        <div class="login-header-tit">美团外卖</div>
      </section>
    </header>
    <section id="login-form-to">
      <div class="login-form-phone">
        <input type="text" class="login-form-phone-input" placeholder="请输入手机号" maxlength="11"
        v-model='der' @keyup="istologin(der)">
        <div class="login-form-phone-numtest" v-if='!istologin(der)'>发送验证码</div>
        <div class="login-form-phone-send" v-else  @click="codetest">发送验证码</div>
      </div>
      <div class="login-form-to-test">
        <input type="text" class="iLoginComp-code-input" placeholder="请输入验证码" maxlength="6"
        v-model="tet">
      </div>
      <div class="iLogincomp-opbtn-wrapper">
        <button class="iLoginComp-login-btn"
        v-if="(!istologin(der))||(!istobtn(tet))">登录</button>
         <button class="iLoginComp-yellow-btn"
        @click="toclick();addpwd({der:der,tet:tet})" v-else>登录</button>
      </div>

      <div class="login-net-watch">
        <a href="javascript:">查看美团协议与说明</a>
      </div>
    </section>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      der: '',
      tet: ''
    }
  },
  methods: {
    ...mapMutations(['addpwd']),
    istologin (der) {
      let reglog = /^1[34578]\d{9}$/
      return reglog.test(der)
    },
    istobtn (tet) {
      let btnreg = /^\d{6}$/
      return btnreg.test(tet)
    },
    codetest () {
      let arrcode = []
      for (let i = 0; i < 6; i++) {
        arrcode.push(Math.floor(Math.random() * 10))
      }
      this.tet = arrcode.join('')
    },
    toclick () {
      this.$router.push('/')
    },
    toclick () {
      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="scss">
body{
  background: #fff;
}
  #login-header{
    width: 100%;
    min-height: 96px;
    margin-top: 59px;
    margin-bottom: 50px;
    .mt-login-header{
      width: 73px;
      height: 96px;
      margin: 0 auto;
        img{
          display: inline-block;
          margin: 0 auto;
          width: 66px;
          height: 66px;
        }
        .login-header-tit{
              font-size: 18px;
              display: block;
              margin: 0 auto;
              text-align: center;
        }
    }
  }
  #login-form-to {
    input::-webkit-input-placeholder {
      color: #aab2bd;
    }
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    font-size: 16px;
    .login-form-phone{
      display: flex;
      justify-content: space-around;
      border-bottom: 1px solid #e5e5e5;
      padding-bottom: 10px;
      .login-form-phone-input{
            flex: 1;
            border: 0;
            font-size: 16px;
      }
      .login-form-phone-numtest{
        font-size: 14px;
        color: #999;
        display: flex;
        align-items: center;
        background-color: #dcdcdc;
        border: 1px solid #dcdcdc;
        padding: 2px 6px;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
      }
      .login-form-phone-send{
          color: #ffd300;
          border: 1px solid #ffd300;
          display: flex;
          align-items: center;
          padding: 2px 6px;
          border-radius: 4px;
          box-sizing: border-box;
          cursor: pointer;
      }
    }
    .login-form-to-test{
        display: flex;
        justify-content: space-around;
        margin-top: 14px;
        padding-bottom: 8px;
        border-bottom: 1px solid #e5e5e5;
        width: 100%;
      .iLoginComp-code-input{
            flex: 1;
            border: 0;
            font-size: 16px;
      }
    }
    .iLogincomp-opbtn-wrapper{
          font-size: 16px;
          margin-top: 30px;
          .iLoginComp-login-btn{
            text-align: center;
            color: #999;
            background: #e5e5e5;
            height: 46px;
            line-height: 46px;
            border-radius: 3px;
            width: 100%;
            display: block;
            border: none;
            cursor: pointer;
            font-size: 18px;
            user-select: none;
          }
          .iLoginComp-yellow-btn{
                text-align: center;
                color: #fff;
                background: #ffd300;
                height: 46px;
                line-height: 46px;
                border-radius: 3px;
                width: 100%;
                display: block;
                border: none;
                cursor: pointer;
                font-size: 18px;
                user-select: none;
          }
    }
    .login-net-watch{
        position: fixed;
        bottom: 90px;
        left: 50%;
        margin-left: -67px;
      a{
        font-size: 14px;
          color: #999;
          text-decoration: underline;
      }
    }
  }
</style>
