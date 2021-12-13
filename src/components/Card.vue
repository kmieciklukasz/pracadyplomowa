<template>
  <b-card
    :title="fullName"
    tag="article"
    style="max-width: 20rem;"
    class="my-2"
  >
    <b-row class="my-1" v-if="isEditing">
      <b-col sm="12" class="editable--padding-bottom">
        <label for="input-small" class="smaller-text">Szczegóły:</label>
        <b-card
          :title="full"
          tag="article"
          style="max-width: 20rem;"
          class="my-2"
        ></b-card>
      </b-col>
    </b-row>
    <b-button
      variant="success"
      size="sm"
      v-if="!isEditing"
      @click="isEditing = true"
      >Szczegóły</b-button
    >
    &nbsp;
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
    photo: {
      type: String,
      required: true,
    },
  },
  computed: {
    fullName() {
      return `${this.nazwa} ${this.marka}`;
    },
    full() {
      return `${this.nazwa} ${this.marka} ${this.pojemnosc} ${this.rok} ${
        this.paliwo
      }
      ${this.opis} ${this.rozwiazanie} ${this.photo}`;
    },
  },
  methods: {},
  mounted() {
    this.names = `${this.nazwa} ${this.marka} ${this.pojemnosc} ${this.rok} ${
      this.paliwo
    }
      ${this.opis} ${this.rozwiazanie} ${this.photo}`;
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
