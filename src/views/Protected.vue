<template>
  <div id="app">
    <div class="white-background">
      <Navigation />
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <div class="padding">
      <h1>Zadaj pytanie naszemu ekspertowi</h1>

      <b-container>
        <cardAdd @add="add" />
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import cardAdd from "../components/cardAdd";
import Navigation from "/Praca Dyplomowa/pracadyplomowa/src/components/Navigation.vue";
import Footer from "/Praca Dyplomowa/pracadyplomowa/src/components/Footer.vue";

export default {
  components: {
    cardAdd,
    Navigation,
    Footer,
  },
  methods: {
    add(userData) {
      this.axios
        .post(
          "https://helpdesk-d6624-default-rtdb.firebaseio.com/usterki.json",
          userData
        )
        .then((response) => {
          console.log("sukces", response);
        })
        .catch((err) => console.log("Err", err));
    },
  },
};
</script>
