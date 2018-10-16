<template>
    <div>
        <h1>课程详细({{currentCourseID}})</h1>
        <div>
            <h3>课程：{{courseDetail.name}}</h3>
            <h3>课程概述：{{courseDetail.brief}}</h3>
            <h3>课程分类：{{courseDetail.sub_category.name}}</h3>
          <h3>为什么要学python:{{courseDetail.rls.why_study}}</h3>
          <h3>我将学到什么:{{courseDetail.rls.video_brief_link}}</h3>
          <h1 style="color: red">问题</h1>
          <div v-for="item in courseDetail.rls.course_question" style="color: red;">
            <h2>{{item.question}}</h2>
          <h3>{{item.answer}}</h3>
          </div>
              <h1 style="color: blue">章节</h1>
          <div v-for="item in courseDetail.rls.course_chapters" style="color: blue;">
        <h3>第{{item.chapter}}章</h3>
            <h3>{{item.name}}</h3>
          </div>
          <h3 style="color: green">评论</h3>
          <div v-for="item in courseDetail.rls.course_comments" style="color: yellow">
            <h3>{{item.name}}:{{item.content}}</h3>
            <h4>时间：{{item.time}}</h4>
          </div>
          <h3>价格和课程周期</h3>
        <div v-for="item in courseDetail.rls.course_price">
          <h3>周期:{{item.time}}</h3>
          <h3>价格：{{item.price}}</h3>
        </div>
        </div>
        <div>
          <h4>推荐课程</h4>
          <ul>
            <li v-for="item in courseDetail.recommand" @click="changeCourse(item.id)" >{{item.name}}</li>
          </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'course_detail',
        data() {
            return {
                currentCourseID: this.$route.params.id,
                courseDetail:{
                  name:null,
                  summary:null,
                },
//
            }
        },
        mounted(){
            this.initCourseDetail()
        },
        methods:{
          initCourseDetail(){
            let that = this
            let url = this.$store.state.apiList.coursedetail + this.currentCourseID + ".json/"
            this.$axios.request({
              url: url,
              method:'GET',
              params:{
                token: this.$store.state.token
              }
            }).then(function (response) {

              that.courseDetail = response.data
            })

          },
          changeCourse(courseId){
              //this.$router.push({name: 'course-detail', params: {id: courseId}})
              this.currentCourseID = courseId
              this.$router.push({path: "/course/detail/"+this.currentCourseID + "/"})
              this.initCourseDetail()
          }

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
