<template>
  <div class="app_box">
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
      <keep-alive exclude="preview">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style>
  body {
    font-size: 16px;
  }
</style>
