import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import http from "./api/http"
const app = createApp(App)

// 导入axios
import axios from "axios";

// 注册组件
// 老版
// app.use(axios)
// 新版
// app.config.globalProperties.$axios=axios

// 导入配置好的axios
app.config.globalProperties.$api=http

// 这个要放在后面，因为需要注册之后再挂载，如果先挂载再注册是不会生效的
app.use(router).mount("#app")


// createApp(App).use(router).mount("#app");
