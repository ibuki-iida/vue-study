import firebase from "./plugins/firebaseConfig";
import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  firebase,
  render: (h) => h(App),
}).$mount("#app");
