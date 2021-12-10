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
          <router-link to="/admin" tag="span">
            <div class="nav"><div style="margin-left: 15%">Silnik</div></div>
          </router-link>
          <div class="nav">
            <div style="margin-left: 15%">Auto-Detailing</div>
          </div>
          <div class="nav"><div style="margin-left: 15%">Zawieszenie</div></div>
          <div class="nav">
            <div style="margin-left: 15%">Układ dolotowy</div>
          </div>
          <div class="nav"><div style="margin-left: 15%">Elektronika</div></div>
        </div>
      </div>
    </div>
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
}
.lista {
  background-color: grey;
  width: 100%;
  float: left;
  height: 85%;
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
</style>