<template>
    <div class="pg-header">
        <div class="nav">
            <router-link to="/index">首页</router-link>
            <router-link to="/course">课程</router-link>
            <router-link to="/micro">LuffyX学位</router-link>
            <router-link to="/news">深科技</router-link>
            <router-link to="/shop">购物车</router-link>
        </div>

        <div class="account">
          <div v-if="this.$store.state.username">
            <a>{{ this.$store.state.username }}</a>
            <a @click="logout">注销</a>
          </div>
          <router-link v-else :to="{name:'login'}">登录</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "header",
      methods:{
          logout(){
            this.$store.commit('clearToken')
          }
      }
    }
</script>

<style scoped>

</style>
