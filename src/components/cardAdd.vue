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
            id="email"
            type="email"
            name="email"
            v-model="email"
            @input="$v.email.$model = $event.trim()"
            :state="!$v.email.$dirty ? null : !$v.email.$error"
            required
            placeholder="Podaj adres email"
          />
          <b-form-invalid-feedback>
            <span v-if="!$v.email.required">To pole jest wymagane. </span>
            <span v-if="!$v.email.email">Błędny adres email. </span>
          </b-form-invalid-feedback>
          <b-form-valid-feedback>
            <span>Wszystko jest okej. </span>
          </b-form-valid-feedback>
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
      <router-link to="/przekierwoanie" tag="span">
        <b-button variant="primary" :disabled="!canAdd" @click="add"
          >Dodaj</b-button
        ></router-link
      >
    </div>
  </b-card>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      imie: "",
      marka: "",
      email: "",
      opis: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
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
