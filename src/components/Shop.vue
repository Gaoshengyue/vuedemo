<template>
    <div>
<h1>购物车</h1>
<div v-for="item in PriceDetail">
  <h1>{{item.rls.name}}</h1>
  <select id="selec">
    <option v-for="price in item.rls.valid_list" v-bind:value="price[0]" @change="sele">{{price[1]}}</option>
  </select>
</div>
    </div>
</template>

<script>
    export default {
        name: 'shop',
        data() {
            return {

                PriceDetail:[],
//
            }
        },
        mounted(){
            this.initCourseDetail()
        },
        methods:{
          initCourseDetail(){
            let that = this
            let url = this.$store.state.apiList.shop;
            this.$axios.request({
              url: url,
              method:'GET',
              params:{
                token: this.$store.state.token
              }
            }).then(function (response) {

              that.PriceDetail = response.data
            })

          },
          sele(event){
            alert(event.target.value)
          }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
