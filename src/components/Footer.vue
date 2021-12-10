<template>
  <div class="back"></div>
</template>




<script>
export default {
  name: "Footer",
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
  },
};
</script>

<style scoped>
.pic {
  width: 5%;
  margin-right: 0%;
}
.back {
  background-color: rebeccapurple;
  height: 10%;
  width: 100%;
}
</style>