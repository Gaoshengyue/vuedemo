<template>
  <div>
    <div>

      <input type="text" v-model="username" placeholder="请输入用户名">
      <input type="password" v-model="password" placeholder="请输入密码">
      <input type="button" @click="doLogin" value="登录">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      doLogin() {

        var that = this

        this.$axios.request({
          url:this.$store.state.apiList.auth,
          method: 'POST',
          data: {
            username: this.username,
            password: this.password
          },
          responseType: 'json'
        }).then(function (response) {
          that.$store.commit("saveToken",response.data)
          alert(response.data.token)
        }).catch(function (response) {

        })

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
