<template>
  <b-card title="" header-tag="header" footer-tag="footer">
    <b-card-text>
      <b-row class="my-2">
        <b-col sm="2">
          <label for="input-small">Krótka nazwa problemu:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="nazwa"
            placeholder="Dodaj nazwe"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Marka samochodu:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="marka"
            placeholder="Podaj markę"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Pojemność silnika:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="pojemnosc"
            placeholder="Podaj markę"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Rok Wyprodukowania:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="rok"
            placeholder="Podaj markę"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Paliwo:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="paliwo"
            placeholder="Dodaj paliwo"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Opisz problem:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            size="sm"
            type="text"
            v-model="opis"
            placeholder="Opisz problem w jak najmniejszym szczególe, to ułatwi nam pracę"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Rozwiązanie:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            size="sm"
            type="text"
            v-model="rozwiazanie"
            placeholder="Dodaj rozwiązanie"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Zdjęcie:</label>
        </b-col>
        <b-col sm="10">
          <b-form-textarea
            size="sm"
            type="text"
            v-model="zdjecie"
            placeholder="Dodaj link do zdjęcia"
          />
        </b-col>
      </b-row>
    </b-card-text>

    <div slot="footer">
      <b-button variant="primary" @click="add">Dodaj</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      imie: "",
      marka: "",

      opis: "",
    };
  },
  computed: {
    canAdd() {
      return (
        this.imie.trim().length >= 3 &&
        this.marka.trim().length >= 3 &&
        this.opis.trim().length >= 3
      );
    },
  },
  methods: {
    add() {
      this.$emit("add", {
        nazwa: this.nazwa,
        marka: this.marka,
        pojemnosc: this.pojemnosc,
        rok: this.rok,
        paliwo: this.paliwo,
        opis: this.opis,
        rozwiazanie: this.rozwiazanie,
        zdjecie: this.zdjecie,
        accept: 0,
      });
    },
  },
};
</script>
