<template>
  <div class="padding">
    <h1></h1>

    <div class="box">
      <div class="left">
        <div class="ad">
          <h1>Panel Adminia</h1>
          <router-link to="/panel" tag="span"
            ><button type="button" class="btn btn-primary">
              powrót
            </button></router-link
          >
        </div>
        <div class="lista">
          <div class="nav1" style="background-color: rgb(22, 45, 66)">
            <h6>Zweryfikuj rozwiązanie:</h6>
          </div>
          <router-link to="/silnik_accept" tag="span">
            <div class="nav"><div style="margin-left: 15%">Silnik</div></div>
          </router-link>

          <router-link to="/detailing_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Auto-Detailing</div>
            </div>
          </router-link>
          <router-link to="/zawieszenie_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Zawieszenie</div>
            </div>
          </router-link>
          <router-link to="/uklad_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Układ dolotowy</div>
            </div>
          </router-link>
          <router-link to="/elektronika_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Elektronika</div>
            </div> </router-link
          ><br />
          <div class="nav1" style="background-color: rgb(22, 45, 66)">
            <h6>Zarządzaj użytkownikami</h6>
          </div>
          <div class="nav1" style="background-color: rgb(22, 45, 66)">
            <h6>Zarządzaj pracownikami</h6>
          </div>
        </div>
      </div>
    </div>

    <div class="formularz">
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
                @delete="remove"
                @save="save"
                v-if="player.accept == 0"
                :nazwa="player.nazwa"
                :marka="player.marka"
                :pojemnosc="player.pojemnosc"
                :rok="player.rok"
                :paliwo="player.paliwo"
                :opis="player.opis"
                :rozwiazanie="player.rozwiazanie"
                :zdjecie="player.zdjecie"
                :accept="player.accept"
                :nodeId="nodeId"
              />
            </b-col>
          </b-row>
        </transition>
      </b-container>
    </div>
  </div>
</template>

<script>
import Card from "/Praca Dyplomowa/pracadyplomowa/src/components/Card_accept";
import Navigation from "/Praca Dyplomowa/pracadyplomowa/src/components/Navigation.vue";
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
    Navigation,
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
    async remove(nodeId) {
      try {
        if (this.players[nodeId] === undefined) {
          throw "node doesn't exist";
        }
        await this.axios.delete(
          `https://helpdesk-d6624-default-rtdb.firebaseio.com/detailing/${nodeId}.json`
        );

        this.$delete(this.players, nodeId);
      } catch (e) {
        console.log("async Error", e);
      }
    },
    async save({ accept, nodeId }) {
      console.log("pobieranie Error");
      try {
        const userData = {
          accept,
          nodeId,
        };
        let { data } = await this.axios.patch(
          `https://helpdesk-d6624-default-rtdb.firebaseio.com/detailing/${nodeId}.json`,
          userData
        );
        this.$set(this.players, nodeId, data);
      } catch (e) {
        console.log("async Error", e);
      }
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
.box {
  width: 100%;
  position: absolute;
  height: 80%;
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
  margin-left: 5%;
}

.box {
  width: 100%;
  position: absolute;
  height: 100%;
}

.left {
  background-color: white;
  width: 17%;
  float: left;
  height: 100%;
  box-shadow: 3px 3px 6px black;
  margin-right: 2%;
}
.ad {
  background-color: rgb(42, 85, 126);
  width: 100%;
  float: left;
  height: 20%;
  color: wheat;
}
.lista {
  background-color: rgb(30, 61, 90);
  width: 100%;
  float: left;
  height: 85%;
}
.nav1 {
  width: 70%;
  margin-top: 4%;
  color: white;
  margin-left: 15%;
}
.nav {
  width: 70%;
  margin-top: 4%;

  color: white;
  margin-left: 15%;

  cursor: pointer;
}

.nav:hover {
  background-color: rgb(22, 45, 66);
}
.formularz {
  height: 50%;
  widows: 50%;
}
</style>
