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
        </div>
      </div>
      <b-container>
        <silnikAdd @add="add" />
      </b-container>
    </div>

    <div class="formularz"></div>
  </div>
</template>

<script>
import silnikAdd from "/Praca Dyplomowa/pracadyplomowa/src/components/form_admin/silnikAdd";
export default {
  components: {
    silnikAdd,
  },
  name: "Praco",
  methods: {
    add(userData) {
      this.axios
        .post(
          "https://helpdesk-d6624-default-rtdb.firebaseio.com/uklad.json",
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
