<template>
  <div id="app">
    <div class="white-background">
      <Navigation />
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <div class="padding">
      <div class="white-card">
        <h1>Rejestracja</h1>
        <b-row>
          <b-col sm="6" offset-sm="3">
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group label="Email:" label-for="email">
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
              </b-form-group>

              <b-form-group label="Hasło:" label-for="password">
                <b-form-input
                  id="password"
                  type="password"
                  v-model="password"
                  @input="$v.password.$model = $event.trim()"
                  :state="!$v.password.$dirty ? null : !$v.password.$error"
                  required
                  placeholder="Podaj hasło"
                />

                <b-form-invalid-feedback>
                  <span v-if="!$v.password.required"
                    >To pole jest wymagane.
                  </span>
                  <span v-if="!$v.password.minLength"
                    >Hasło musi posiadać conajmniej 8 znaków.
                  </span>
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  <span>Wszystko jest okej. </span>
                </b-form-valid-feedback>
              </b-form-group>

              <b-form-group label="Powtórz hasło:" label-for="password1">
                <b-form-input
                  id="password1"
                  type="password"
                  v-model="password1"
                  @input="$v.password1.$model = $event.trim()"
                  :state="!$v.password1.$dirty ? null : !$v.password1.$error"
                  required
                  placeholder="Podaj hasło"
                />

                <b-form-invalid-feedback>
                  <span v-if="!$v.password1.required"
                    >To pole jest wymagane.
                  </span>
                </b-form-invalid-feedback>
                <b-form-invalid-feedback>
                  <span v-if="password1 != password"
                    >Hasło nie są takie same </span
                  ><br />
                </b-form-invalid-feedback>
                <b-form-valid-feedback>
                  <span>Wszystko jest okej. </span>
                </b-form-valid-feedback>
              </b-form-group>

              <b-button type="submit" variant="primary" :disabled="$v.$invalid"
                >Dodaj</b-button
              >
              &nbsp;
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import { required, minLength, email } from "vuelidate/lib/validators";
import BFormInvalidFeedback from "bootstrap-vue/src/components/form/form-invalid-feedback";
import Footer from "../components/Footer.vue";
import Vue from "vue";
import emailjs from "emailjs-com";

//import authAxios from "../auth-axios";
export default {
  components: { BFormInvalidFeedback, Navigation, Footer },

  data() {
    return {
      email: "",
      password: "",
      password1: "",
    };
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
    },
    password1: {
      required,
      minLength: minLength(8),
    },
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await this.$store.dispatch("register", {
        email: this.email,
        password: this.password,
        returnSecureTokej: true,
      });

      event.preventDefault();
      emailjs
        .sendForm(
          "service_thtzvxr",
          "template_rg2nvrj",
          event.target,
          "user_tlQd2gdFvwwnfnOuVDqCI"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log(event.target);
          },
          (error) => {
            console.log(error.text);
          }
        );
    },

    onReset(event) {
      event.preventDefault();
      this.email = "";
      this.password = "";
      this.password1 = "";
      this.$v.$reset();
    },
  },
};
</script>
