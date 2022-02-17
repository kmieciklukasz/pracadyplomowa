<template>
  <div id="app">
    <Navigation />
    <b-jumbotron class="full-height white-bg">
      <template v-slot:header
        >Auto Detailing</template
      >
    </b-jumbotron>
    <hr class="my-4" />
    <b-container>
      <transition name="fade" mode="out-in">
        <div key="1" v-if="loading" class="d-flex justify-content-center my-5">
          <b-spinner variant="primary" />
        </div>

        <b-row key="2" v-else>
          <b-col
            sm="3"
            :key="nodeId"
            v-for="(player, nodeId) in players"
            style="margin-right:100%; margin-bottom:5%"
          >
            <Card
              :nazwa="player.nazwa"
              :marka="player.marka"
              :pojemnosc="player.pojemnosc"
              :rok="player.rok"
              :paliwo="player.paliwo"
              :opis="player.opis"
              :rozwiazanie="player.rozwiazanie"
              :zdjecie="player.zdjecie"
            />
          </b-col>
        </b-row>
      </transition>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Card from "/Praca Dyplomowa/pracadyplomowa/src/components/Card";
import Navigation from "/Praca Dyplomowa/pracadyplomowa/src/components/Navigation.vue";
import Footer from "/Praca Dyplomowa/pracadyplomowa/src/components/Footer.vue";
export default {
  data() {
    return {
      loading: true,
      players: [],
    };
  },
  components: {
    Card,
    Navigation,
    Footer,
  },
  methods: {
    add2(userData) {
      this.axios
        .post(
          "https://helpdesk-d6624-default-rtdb.firebaseio.com/detailing.json",
          userData
        )
        .then((response) => {
          console.log("Sukces", response);
        })
        .catch((err) => console.log("Err", err));
    },
  },
  async created() {
    try {
      let { data } = await this.axios.get(
        "https://helpdesk-d6624-default-rtdb.firebaseio.com/detailing.json"
      );
      this.players = data;
      this.loading = false;
    } catch (e) {
      console.log("pobieranie Error", e);
    }
  },
};
</script>

<style>
.my-app {
  padding: 50px 0;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
