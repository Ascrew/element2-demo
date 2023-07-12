import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import MeUI from "../src/index";

import hljs from "highlight.js";
import DemoBlock from "./components/demo-block";
import "highlight.js/styles/stackoverflow-light.css";

Vue.component("demo-block", DemoBlock);
Vue.use(MeUI);

router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll("pre code:not(.hljs)");
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
  document.title = "me-ui";
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
