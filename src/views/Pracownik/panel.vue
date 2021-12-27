<template>
  <div class="padding">
    <div class="log">
      <h1>Logowanie</h1>
      <router-link to="/" tag="span"
        ><button type="button" class="btn btn-primary">
          powrót
        </button></router-link
      >
      <hr />
    </div>
    <div class="big">
      <div class="admin">
        <h1>
          <router-link to="/logowanie_admin" tag="span"
            >Logowanie Administratora</router-link
          >
        </h1>
      </div>
      <div class="prac">
        <h1>
          <router-link to="/logowanie_pracownik" tag="span"
            >Logowanie Pracownika</router-link
          >
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.big {
  margin-top: 10%;
}
.admin {
  float: left;
  height: 1120%;
  width: 30%;
  margin-left: 15%;
  border: solid;
  cursor: pointer;
}
.prac {
  float: left;
  width: 30%;
  margin-left: 10%;
  height: 100%;
  border: solid;
  cursor: pointer;
}
.admin:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border: white;
  cursor: pointer;
}
.prac:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border: white;
}
</style>
