<template>
  <div id="app" style="margin-top:20%">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <b-card
      title="Za chwile nastąpi przekierwoanie na stronę logowania."
      header-tag="header"
      footer-tag="footer"
    >
      <h6 slot="header" class="mb-0">
        Dziękujemy za zarejstrowanie na naszej stronie.
      </h6>
      <h7>Możesz się pomyślnie zalogować.</h7>
      <meta
        http-equiv="Refresh"
        content="3;url=https://objective-mcclintock-109c5c.netlify.app/login"
      />
      <b-card-text> </b-card-text>
    </b-card>
  </div>
</template>

<script></script>

<style></style>
