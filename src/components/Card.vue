<template>
  <b-card :title="fullName" style="width: 65rem;" class="my-2">
    <b-row class="my-1" v-if="isEditing">
      <b-col sm="12" class="editable--padding-bottom">
        <label for="input-small" class="smaller-text">Szczegóły:</label>

        <b-card tag="article" class="my-2">
          Pojemnosc:{{ this.pojemnosc }}<br />
          Rok:{{ this.rok }}<br />
          Paliwo:{{ this.paliwo }}<br />
          Opis:{{ this.opis }}<br />
          <b>Rozwiązanie:{{ this.rozwiazanie }}</b
          ><br />
          <img :src="photo" style="width:50%;height:50%" />
        </b-card>
      </b-col>
    </b-row>

    <b-button
      variant="success"
      size="sm"
      v-if="!isEditing"
      @click="isEditing = true"
      >Szczegóły</b-button
    ><b-button
      variant="danger"
      size="sm"
      v-if="isEditing"
      @click="isEditing = false"
      >Zwiń</b-button
    >

    <br />
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      names: "",
      isEditing: false,
    };
  },
  props: {
    nazwa: {
      type: String,
      required: true,
    },
    marka: {
      type: String,
      required: true,
    },
    pojemnosc: {
      type: String,
      required: true,
    },
    rok: {
      type: String,
      required: true,
    },
    paliwo: {
      type: String,
      required: true,
    },
    opis: {
      type: String,
      required: true,
    },
    rozwiazanie: {
      type: String,
      required: true,
    },
    zdjecie: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.nazwa} ${this.marka}`;
    },
    photo() {
      return `${this.zdjecie} `;
    },
    nazw() {
      return `${this.nazwa} `;
    },
    full() {
      return `Nazwa Problemu:${this.nazwa} 
      Marka:${this.marka}
      Pojemność:${this.pojemnosc}
      Rok:${this.rok}
      Paliwo:${this.paliwo}
      Opis:${this.opis}
      Rozwiązanie:${this.rozwiazanie}`;
    },
  },
  methods: {},
  mounted() {
    this.names = `${this.nazwa} ${this.marka} ${this.pojemnosc} ${this.rok} ${
      this.paliwo
    } ${this.opis} ${this.rozwiazanie} ${this.zdjecie}`;
  },
};
</script>

<style>
.smaller-text {
  font-size: 0.95em;
}

.editable--padding-bottom {
  padding-bottom: 10px;
}
</style>
