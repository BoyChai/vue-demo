<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
<!--    使用组件-->
    <TestComponents msg="123" @giao="giao"></TestComponents>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// 导入文件
// @符号代表src目录
import TestComponents from "@/components/Test.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    // 导入组件
    TestComponents,
  },
  methods: {
    giao(data) {
      console.log(data)
    }
  }
};
</script>
