<template>
    <div>
        <h1>课程列表</h1>
        <div>
          <div v-for="item in courseList" style="margin-top: 20px;">
            <router-link :to="{path:'/course/detail/'+item.id }">
              <div>{{item.name}}</div>
            </router-link>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'course',
        data() {
            return {
              courseList:[]
            }
        },
        mounted(){
            this.initCourse()
        },
        methods:{
            initCourse(){
                let that = this;

                this.$axios.request({
                  url:this.$store.state.apiList.course,
                  method:'GET',
                  params: {
                    token:this.$store.state.token,
                  },
                  responseType: 'json'
                }).then(function (response) {

                  that.courseList = response.data.results
                })

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
