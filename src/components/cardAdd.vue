<template>
  <b-card title="Podaj swoje dane" header-tag="header" footer-tag="footer">
    <h6 slot="header" class="mb-0">Jak możemy ci pomóc ?</h6>
    <b-card-text>
      <b-row class="my-2">
        <b-col sm="2">
          <label for="input-small">Imię:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="imie"
            placeholder="Podaj swoje imię "
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
          <label for="input-small">E-mail:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="email"
            placeholder="Podaj E-mail, abyśmy mogli ci udzielić odpowiedzi"
          />
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="2">
          <label for="input-small">Opisz problem:</label>
        </b-col>
        <b-col sm="10">
          <b-form-input
            size="sm"
            type="text"
            v-model="opis"
            placeholder="Opisz problem w jak najmniejszym szczególe, to ułatwi nam pracę"
          />
        </b-col>
      </b-row>
    </b-card-text>

    <div slot="footer">
      <b-button variant="primary" :disabled="!canAdd" @click="add"
        >Dodaj</b-button
      >
    </div>
  </b-card>
</template>

<script>
export default {
  data() {
    return {
      imie: "",
      marka: "",
      email: "",
      opis: "",
    };
  },
  computed: {
    canAdd() {
      return (
        this.imie.trim().length >= 3 &&
        this.marka.trim().length >= 3 &&
        this.email.trim().length >= 3 &&
        this.opis.trim().length >= 3
      );
    },
  },
  methods: {
    add() {
      this.$emit("add", {
        imie: this.imie,
        marka: this.marka,
        email: this.email,
        opis: this.opis,
      });
    },
  },
};
</script>
