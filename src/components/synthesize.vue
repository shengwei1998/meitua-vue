<template>
  <div>
    <ul class="synth_allLi">
      <li>
        <a href="javascript:">
          <div class="synth_left">
            <img src="http://p1.meituan.net/aichequan/a88918ba8699e15a5d16d5d7e09ad0022192.png" alt="" class="syn_img1">
            <img src="http://p0.meituan.net/waimaipoi/198e1251c1e17abc5ddf615a81eeb03938512.jpg" alt="" class="syn_img2">
          </div>
          <div class="synth_right">
            <div class="box01">新世界茶餐厅（福永店）</div>
            <div class="box02">
              <div class="box02_left">
                <div class="china">
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                  <i class="iconfont icon-wujiaoxing"></i>
                </div>
                <span class="syn_aa">4.7</span>
                <span class="syn_bb">月售7295</span>
              </div>
              <div class="box02_right">
                <span>40分钟</span>
                <span class="befor">3.4km</span>
              </div>
            </div>
            <div class="box03">
              <span>起送￥28</span>
              <span class="befor">配送￥7</span>
              <span class="befor">人均￥42</span>
              <span class="org">美团专送</span>
            </div>
            <div class="box04"></div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<style>
.synth_allLi{
  margin-top: 10px;
}
  .synth_allLi>li>a{
    display: flex;
    padding: 0 10px;
  }
  .synth_left{
    width: 76px;
    height: 57px;
    position: relative;
    border: 1px #e4e4e4 solid;
    margin-right: 8px;
  }
  .synth_right{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .synth_left>.syn_img1{
    width: 26px;
    position: absolute;
    top: 0;
    right: 0;
  }
  .synth_left>.syn_img2{
    width: 76px;
    height: 57px;
  }
  .box01{
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }
  .box02{
    display: flex;
    justify-content: space-between;
  }
  .box02 span{
    font-size: 12px;
    color: #333;
  }
  .box02_left{
    display: flex;
    align-items: center;
  }
  .box02_left>.china>i{
    font-size: 12px;
    color: orange;
  }
  .box02_left>.syn_aa{
    margin-left: 6px;
    margin-top: 5px;
  }
  .box02_left>.syn_bb{
    margin-left: 10px;
    margin-top: 5px;
  }
  .box02_right{
    float: right;
    flex: 1 0;
    text-align: right;
  }
  .befor::before{
    content: "";
    display: inline-block;
    margin: 0 3px;
    height: 6px;
    width: 1px;
    background: #ccc;
  }
  .box03{
    display: flex;
    align-items: center;
    line-height: 20px;
  }
  .box03>span{
    font-size: 12px;
    color: #333;
  }
  .org{
    display: block;
    margin-left: 60px;
    width: 50px;
    height: 15px;
    line-height: 15px;
    background: orange;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
</style>
