<template>
  <div id="app">
    <div class="white-background">
      <Navigation />
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <b-jumbotron class="full-height white-bg">
      <template v-slot:header>Silnik</template>

      <template v-slot:lead> </template>

      <hr class="my-4" />
    </b-jumbotron>
  </div>
</template>

<script>
import Navigation from "/Praca Dyplomowa/pracadyplomowa/src/components/Navigation.vue";
export default {
  name: "home",
  components: {
    Navigation,
  },
};
</script>

<style>
.full-height {
  height: 100%;
}

.white-bg {
  background: #fff !important;
}

.category {
  width: 15%;
  height: 15%;
  float: left;
  margin-left: 5%;
}
.picture {
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
.home {
  margin-left: 20%;
  float: left;
}
</style>