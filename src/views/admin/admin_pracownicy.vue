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

          <router-link to="/detailing_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Auto-Detailing</div>
            </div>
          </router-link>
          <router-link to="/zawieszenie_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Zawieszenie</div>
            </div>
          </router-link>
          <router-link to="/uklad_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Układ dolotowy</div>
            </div>
          </router-link>
          <router-link to="/elektronika_accept" tag="span">
            <div class="nav">
              <div style="margin-left: 15%">Elektronika</div>
            </div> </router-link
          ><br />

          <router-link to="/admin_uzytkownicy" tag="span">
            <div
              class="nav1"
              style="background-color: rgb(22, 45, 66);cursor: pointer;"
            >
              <h6>Zarządzaj użytkownikami</h6>
            </div></router-link
          >

          <router-link to="/admin_pracownicy" tag="span">
            <div
              class="nav1"
              style="background-color: rgb(22, 45, 66); cursor: pointer;"
            >
              <h6>Zarządzaj pracownikami</h6>
            </div></router-link
          >
        </div>
      </div>
      <div class="padding" style="margin-top:5%">
        <div class="white-card" style="margin-top:-12%">
          <h1>Dodaj pracownika</h1>
          <b-row>
            <b-col sm="6" offset-sm="3">
              <b-form @submit="onSubmit" @reset="onReset">
                <b-form-group label="Email:" label-for="email">
                  <b-form-input
                    id="email"
                    type="email"
                    v-model="email"
                    name="email"
                    @input="$v.email.$model = $event.trim()"
                    :state="!$v.email.$dirty ? null : !$v.email.$error"
                    required
                    placeholder="Podaj adres email"
                  />
                  <b-form-invalid-feedback>
                    <span v-if="!$v.email.required"
                      >To pole jest wymagane.
                    </span>
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

                <b-button
                  type="submit"
                  variant="primary"
                  :disabled="$v.$invalid"
                  >Wyślij</b-button
                >
                &nbsp;
                <b-button type="reset" variant="danger">Reset</b-button>
              </b-form>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>

    <div class="formularz"></div>
  </div>
</template>

<script>
import Navigation from "../../components/Navigation.vue";
import { required, minLength, email } from "vuelidate/lib/validators";
import BFormInvalidFeedback from "bootstrap-vue/src/components/form/form-invalid-feedback";
//import authAxios from "../auth-axios";
import emailjs from "emailjs-com";
export default {
  name: "Praco",
  components: { BFormInvalidFeedback, Navigation },

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
      await this.$store.dispatch("pracownik", {
        email: this.email,
        password: this.password,
        returnSecureTokej: true,
      });
      event.preventDefault();
      emailjs
        .sendForm(
          "service_thtzvxr",
          "template_p1nqf7c",
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
