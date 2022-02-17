<template>
  <div id="app" style="margin-top:20%">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <b-card
      title="Za chwile nastąpi przekierwoanie na stronę główną."
      header-tag="header"
      footer-tag="footer"
    >
      <h6 slot="header" class="mb-0">Dziękujemy za złożenie zapytania.</h6>
      <h7>Oczekuj na odpowiedź na swojej skrzynce mailowej.</h7>
      <meta http-equiv="Refresh" content="3;url=/" />
      <b-card-text> </b-card-text>
    </b-card>
  </div>
</template>

<script></script>

<style></style>
