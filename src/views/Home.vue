<template>
  <div id="app">
    <div class="white-background">
      <Navigation />
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <b-jumbotron class="full-height white-bg">
      <template v-slot:header
        >Popularne usterki</template
      >

      <template v-slot:lead>
        Tutaj możesz znaleźć popularne usterki wielu marek aut
      </template>

      <hr class="my-4" />

      <div class="home">
        <div class="category">
          <router-link to="/silnik" tag="span">
            <img src="../assets/silnik.jpg" class="picture" />
            <p>Silnik</p>
          </router-link>
        </div>

        <div class="category">
          <router-link to="/auto_detailing" tag="span">
            <img src="../assets/detailing.jpg" class="picture" />
            <p>Auto Detailing</p>
          </router-link>
        </div>

        <div class="category">
          <router-link to="/Zawieszenie" tag="span">
            <img src="../assets/zawieszenie.jpg" class="picture" />
            <p>Zawieszenie</p>
          </router-link>
        </div>
        <div class="home">
          <div class="category1">
            <router-link to="/Uklad" tag="span">
              <img src="../assets/uklad.jpg" class="picture" />

              <p>Układ dolotowy/Wydechowy</p>
            </router-link>
          </div>

          <div class="category1">
            <router-link to="/Elektronika" tag="span">
              <img src="../assets/elektronika.jpg" class="picture" />
              <p>Elektronika</p>
            </router-link>
          </div>
        </div>
      </div>
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
  width: 16%;
  height: 16%;
  float: left;
  margin-left: 13%;
}

.category1 {
  width: 16%;
  height: 16%;
  float: left;
  margin-left: 21%;
}
.picture {
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
.home {
  margin-left: 1%;
  margin-top: 1%;
  float: left;
}

.category:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.category1:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
</style>
