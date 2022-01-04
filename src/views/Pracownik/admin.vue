<template>
  <div>
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
      <b-container>
        <silnikAdd @add="add" />
      </b-container>
    </div>

    <div class="formularz"></div>
  </div>
</template>

<script>
export default {
  name: "Praco",
};
</script>

<style>
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
  margin-left: 5%;
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
