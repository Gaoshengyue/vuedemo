import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'vue-cookies'

Vue.use(Vuex)

export default new Vuex.Store({
  // 组件中通过 this.$store.state.username 调用
  state: {
    username: Cookie.get('username'),
    token: Cookie.get('token'),
    apiList: {
      auth: 'http://127.0.0.1:8000/user/',
      course: 'http://127.0.0.1:8000/app01/v1/userj.json/',
      coursedetail:'http://127.0.0.1:8000/app01/v1/userj/',
      article:'http://127.0.0.1:8000/app01/v1/users.json/',
      shop:'http://127.0.0.1:8000/app01/v1/shop/'
    }
  },
  mutations: {
    // 组件中通过 this.$store.commit(参数)  调用
    saveToken: function (state, userToken) {
      // token，保存到cookie中。
      // 用户名，保存到cookie中。
      // &
      // 将“登录” 变成用户名
      // that.$store.state.username = that.username
      state.username = userToken.name
      state.token = userToken.token

      Cookie.set("username", userToken.name, "20min")
      Cookie.set("token", userToken.token, "20min")
    },
    clearToken: function (state) {
      state.username = null
      state.token = null
      Cookie.remove('username')
      Cookie.remove('token')
    }
  },
})
