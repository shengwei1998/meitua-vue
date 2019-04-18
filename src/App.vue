<template>
  <div>
    <transition
      enter-active-class="animated rotateIn"
      leave-active-class="animated rotateOut"
    >
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
