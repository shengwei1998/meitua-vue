<template>
  <div class="app_box">
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
    </transition>
    <keep-alive exclude="preview">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style>
  body {
    font-size: 16px;
  }
</style>
