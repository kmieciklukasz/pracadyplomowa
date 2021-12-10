<template>
  <div id="app">
    <div class="white-background"></div>
    <transition name="fade" mode="out-in"> <router-view />d </transition>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
