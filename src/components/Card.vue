<template>
  <b-card :title="fullName" style="width: 65rem;" class="my-2">
    <b-row class="my-1" v-if="isEditing">
      <b-col sm="12" class="editable--padding-bottom">
        <b-row class="my-2">
          <b-col sm="2">
            <label for="input-small"><b>Pojemnosc:</b></label>
          </b-col>
          <b-col sm="10">
            {{ this.pojemnosc }}
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col sm="2">
            <label for="input-small"><b>Rok:</b></label>
          </b-col>
          <b-col sm="10">
            {{ this.rok }}
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col sm="2">
            <label for="input-small"><b>Paliwo:</b></label>
          </b-col>
          <b-col sm="10">
            {{ this.paliwo }}
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col sm="2">
            <label for="input-small"><b>Opis problemu:</b></label>
          </b-col>
          <b-col sm="10">
            {{ this.opis }}
          </b-col>
        </b-row>

        <b-row class="my-2">
          <b-col sm="2">
            <label for="input-small"><b>Rozwiązanie:</b></label>
          </b-col>
          <b-col sm="10">
            {{ this.rozwiazanie }}
          </b-col>
        </b-row>

        <b-card tag="article" class="my-2">
          <br />
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
    accept: {
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
    } ${this.opis} ${this.rozwiazanie} ${this.zdjecie} ${this.accept}`;
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
