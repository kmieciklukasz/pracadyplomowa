<template>
  <div>
    <div>
      <h1>Pracownik</h1>
      <router-link to="/panel" tag="span"
        ><button type="button" class="btn btn-primary">
          powrót
        </button></router-link
      >
      <hr />
    </div>

    <div class="box">
      <div class="left">
        <div class="ad"><h1>Username</h1></div>
        <div class="lista">
          <div class="nav1" style="background-color: rgb(85, 84, 84)">
            <h6>Dodaj rozwiązanie:</h6>
          </div>

          <router-link to="/add_silnik" tag="span">
            <div class="nav"><div style="margin-left: 15%">Silnik</div></div>
          </router-link>
          <router-link to="/add_detailing" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Auto-Detailing</div>
            </div>
          </router-link>
          <router-link to="/add_zawieszenie" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Zawieszenie</div>
            </div>
          </router-link>
          <router-link to="/add_uklad" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Układ dolotowy</div>
            </div>
          </router-link>
          <router-link to="/add_elektronika" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Elektronika</div>
            </div>
          </router-link>
          <router-link to="/odpowiedz" tag="span">
            <div
              class="nav1"
              style="background-color: rgb(85, 84, 84); cursor:pointer;"
            >
              <h6>Odpowiedz na pytanie</h6>
            </div></router-link
          >
        </div>
      </div>
      <b-container>
        <transition name="fade" mode="out-in">
          <div
            key="1"
            v-if="loading"
            class="d-flex justify-content-center my-5"
          >
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
                :email="player.email"
                :imie="player.imie"
                :marka="player.marka"
                :opis="player.opis"
              />
            </b-col>
          </b-row>
        </transition>
      </b-container>
    </div>

    <div class="formularz"></div>
  </div>
</template>

<script>
import Card from "/Praca Dyplomowa/pracadyplomowa/src/components/Card_odp";

export default {
  name: "Praco",
  data() {
    return {
      loading: true,
      players: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    add2(userData) {
      this.axios
        .post(
          "https://helpdesk-d6624-default-rtdb.firebaseio.com/usterki.json",
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
        "https://helpdesk-d6624-default-rtdb.firebaseio.com/usterki.json"
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
.box {
  width: 100%;
  position: absolute;
  height: 80%;
}

.left {
  background-color: gray;
  width: 15%;
  float: left;
  height: 100%;
}
.ad {
  background-color: rgb(112, 111, 111);
  width: 100%;
  float: left;
  height: 15%;
  border-radius: 5px 5px 5px 5px;
}
.lista {
  background-color: grey;
  width: 100%;
  float: left;
  height: 85%;
  border-radius: 5px 5px 5px 5px;
}
.nav1 {
  width: 70%;
  margin-top: 4%;
  color: white;
  margin-left: 15%;
  border-radius: 5px 5px 5px 5px;
}
.nav {
  width: 70%;
  margin-top: 4%;
  color: white;
  margin-left: 15%;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
}

.nav:hover {
  background-color: rgb(85, 84, 84);
}
.formularz {
  height: 50%;
  widows: 50%;
}
</style>
