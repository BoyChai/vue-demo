<!--创建组件-->
<template>
  <div>
    <h1 v-if="msg==null" class="msg">{{ message }}</h1>
    <h1 v-else class="msg">{{ msg }}</h1>
    <button @click="btn()">点我向父组件传递数据</button>
  </div>
</template>

<script>
export default {
  name: "TestComponents",
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  props: {  // 父传子参数
    msg: Array,
  },
  methods: {
    btn() {
      this.$emit("giao",this.message)
    }
  }
};
</script>

<style scoped>
.msg {
  color: red;
}
</style>