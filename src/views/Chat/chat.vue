<template>
  <div id="app">
    <div class="white-background">
      <Navigation />
    </div>

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

    <b-jumbotron class="full-height white-bg">
      <h1>Chat</h1>

      <pre id="messages" style="height: 400px; overflow: scroll;"></pre>
      <div>
        <b-form-input
          type="text"
          id="login"
          placeholder="Podaj swój login"
          style="display: block; width: 40%; margin-left: 30%; padding: 10px"
        />

        <b-form-input
          type="text"
          id="messageBox"
          placeholder="Wpisz swoją wiadmość"
          style="display: block; width: 40%; margin-left: 30%; margin-top: 1%; padding: 10px"
        />

        <b-button
          type="submit"
          variant="primary"
          id="send"
          title="Send Message!"
          style="width: 40%; height: 30px;margin-top: 1%;"
          @click="add"
          >Dodaj</b-button
        >
      </div>
    </b-jumbotron>
    <Footer />
  </div>
</template>

<script>
import Navigation from "/Praca Dyplomowa/pracadyplomowa/src/components/Navigation.vue";
import Footer from "/Praca Dyplomowa/pracadyplomowa/src/components/Footer.vue";
export default {
  name: "home",
  components: {
    Navigation,
    Footer,
  },
  methods: {
    add() {
      if (!this.ws) {
        this.showMessage("No WebSocket connection :(");
        return;
      }

      this.ws.send(document.querySelector("#messageBox").value);
      this.showMessage(
        document.querySelector("#login").value +
          " : " +
          document.querySelector("#messageBox").value
      );
    },
    showMessage(message) {
      document.querySelector("#messages").textContent += `\n\n${message}`;
      document.querySelector("#messages").scrollTop = document.querySelector(
        "#messages"
      ).scrollHeight;
      document.querySelector("#messageBox").value = "";
    },
  },

  data() {
    return {
      ws: "",
    };
  },

  created: function() {
    if (this.ws) {
      this.ws.onerror = this.ws.onopen = this.ws.onclose = null;
      this.ws.close();
    }

    this.ws = new WebSocket("ws://localhost:6969");
    this.ws.onopen = () => {
      console.log("Connection opened!");
    };
    this.ws.onmessage = ({ data }) => showMessage(data);
    this.ws.onclose = function() {
      this.ws = null;
    };
  },
};
</script>

<style>
.full-height {
  height: 100%;
}

.white-bg {
  background: #fff !important;
}

.category {
  width: 16%;
  height: 16%;
  float: left;
  margin-left: 13%;
  cursor: pointer;
}

.category1 {
  width: 16%;
  height: 16%;
  float: left;
  margin-left: 21%;
  cursor: pointer;
}
.picture {
  margin-top: 10%;
  height: 100%;
  width: 100%;
}
.home {
  margin-left: 1%;
  margin-top: 1%;
  float: left;
}

.category:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
.category1:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
}
</style>
