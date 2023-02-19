import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import TestComponents  from "@/components/Test.vue";

// createApp(App).use(router).mount("#app");

const app = createApp(App)
app.use(router).mount("#app");
app.component('TestComponents',TestComponents)