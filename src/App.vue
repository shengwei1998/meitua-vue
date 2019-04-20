<template>
  <div class="app_box">
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
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
