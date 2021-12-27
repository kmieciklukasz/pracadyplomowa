<template>
  <b-card :title="fullName" style="width: 65rem;" class="my-2">
    <b-row class="my-1" v-if="isEditing">
      <b-col sm="12" class="editable--padding-bottom">
        <label for="input-small" class="smaller-text">Szczegóły:</label>

        <b-card tag="article" class="my-2">
          email: {{ this.email }}<br />
          Imie:{{ this.imie }}<br />
          marka:{{ this.marka }}<br />
          Opis:{{ this.opis }}<br />
          <br />
        </b-card>
      </b-col>
    </b-row>

    <b-button
      variant="success"
      size="sm"
      v-if="!isEditing"
      @click="isEditing = true"
      >Szczegóły</b-button
    >

    <form
      action="https://formsubmit.co/kmiecik39@gmail.com"
      method="POST"
      v-if="isEditing"
    >
      <h3>Odpowiedz:</h3>
      <input type="hidden" name="_subject" value="Help-Desk" />
      <input type="email" name="email" value="Podaj Email" /><br /><br />

      <textarea
        type="textarea"
        name="message"
        placeholder="Napisz swoją odpowiedź"
        required
      /><br /><br />
      <b-button variant="success">Wyślij</b-button><br /><br />
    </form>
    <b-button
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
    opis: {
      type: String,
      required: true,
    },
    marka: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    imie: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.Opis} ${this.marka}`;
    },
    photo() {
      return `${this.zdjecie} `;
    },
    nazw() {
      return `${this.Opis} `;
    },
    full() {
      return `Opis:${this.opis} 
      Marka:${this.marka}
      Email:${this.email}
      Imie:${this.imie}
     `;
    },
  },
  methods: {},
  mounted() {
    this.names = `${this.opis} ${this.marka} ${this.email} ${this.imie} `;
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
