<template>
  <!-- Footer -->
  <mdb-footer color="blue" class="font-small pt-4 mt-4">
    <hr class="my-4" />
    <mdb-container class="text-left">
      <mdb-row>
        <mdb-col sm="6">
          <h5 class="title">Potrzebujesz pomocy technicznej?</h5>
          <p>
            Skontaktuj się z nami!
          </p>
          <b-card header-tag="header" footer-tag="footer">
            <b-form @submit="onSubmit">
              <b-card-text>
                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="input-small">E-mail:</label>
                  </b-col>

                  <b-col sm="10">
                    <b-form-input
                      id="email1"
                      type="email"
                      name="email"
                      size="sm"
                      v-model="email"
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
                  </b-col>
                </b-row>

                <b-row class="my-1">
                  <b-col sm="2">
                    <label for="input-small">Wiadomość:</label>
                  </b-col>

                  <b-col sm="10">
                    <b-form-input
                      id="opis"
                      type="opis"
                      name="opis"
                      size="sm"
                      v-model="opis"
                      @input="$v.opis.$model = $event.trim()"
                      :state="!$v.opis.$dirty ? null : !$v.opis.$error"
                      required
                      placeholder="Opisz swój problem, abyśmy mogli ci pomóc!"
                    />

                    <b-form-invalid-feedback>
                      <span v-if="!$v.opis.required"
                        >To pole jest wymagane.
                      </span>
                    </b-form-invalid-feedback>
                    <b-form-valid-feedback>
                      <span>Wszystko jest okej. </span>
                    </b-form-valid-feedback>
                  </b-col>
                </b-row>
              </b-card-text>

              <b-button type="submit" variant="primary" :disabled="$v.$invalid"
                >Dodaj</b-button
              ></b-form
            >
          </b-card>
        </mdb-col>
        <mdb-col sm="6">
          <h5 class="title">Linki</h5>
          <ul>
            <li class="list-unstyled">
              <a href="#!">
                <router-link to="/register" tag="span">Rejestracja</router-link>
              </a>
            </li>
            <li class="list-unstyled">
              <a href="#!">
                <router-link to="/login" tag="span">Logowanie</router-link>
              </a>
            </li>
            <li class="list-unstyled">
              <a href="#!">
                <router-link to="/protected" tag="span"
                  >Pytanie do eksperta</router-link
                >
              </a>
            </li>
            <li class="list-unstyled">
              <a href="#!">
                <router-link to="/chat" tag="span">Chat</router-link>
              </a>
            </li>
          </ul>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class="footer-copyright text-center py-3">
      <mdb-container fluid>
        &copy; 2020 Copyright:
        <a href="https://www.MDBootstrap.com"> Łukasz Kmiecik </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from "mdbvue";
import { required, minLength, email, opis } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: "",
      opis: "",
    };
  },
  name: "FooterPage",
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol,
  },
  computed: {
    canAdd() {
      return this.opis.trim().length >= 3 && this.email.trim().length >= 3;
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    opis: {
      required,
    },
  },
  methods: {
    onSubmit() {
      alert("Wysłano wiadomość.");
    },
  },
};
</script>
