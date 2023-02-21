<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getData">调用axios</button>
    <h3 v-show="user">用户信息</h3>
    <ul v-for="item in user.data" :key="item.id" >
      <li>{{item.name}}</li>
      <li>{{item.email}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: "",
    }
  },
  methods: {
    getData() {
      // this.$axios.get('http://api.boychai.xyz/test/v1/user').then( (resp)=> {
      // this.$axios.get('/test/v1/user').then( resp=> {
      this.$api.get('v1/user').then( (resp)=> {
        this.user = resp.data
      }).catch(err => {
        // 使用catch捕捉异常
        console.log(err)
      })
      console.log(this.user)
    }
  }
}

</script>