<template>
    <div>
<h1>文章</h1>
      <div v-for="item in ArticleDetail" style="border:1px solid">
        <h3>标题：{{item.title}}</h3>
        <h3>概述：{{item.brief}}</h3>
        <h3>内容：{{item.content}}</h3>
        <h3>创建时间：{{item.rls.time}}</h3>
        <h3>来源:{{item.source.name}}</h3>
        <h3 v-for="tag in item.tags.name">标签:{{tag.name}}</h3>
        <h4>点赞：{{item.agree_num}}</h4>
        <h4>收藏：{{item.collect_num}}</h4>
        <h2 style="color: red">评论</h2>
        <div v-for="comment in item.rls.comment">
          <h5>用户：{{comment.account}}</h5>
          <h5>内容：{{comment.content}}</h5>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'news',
        data() {
            return {
                ArticleDetail:[]
//
            }
        },
        mounted(){
            this.initCourseDetail()
        },
        methods:{
          initCourseDetail(){
            let that = this
            let url = this.$store.state.apiList.article;
            this.$axios.request({
              url: url,
              method:'GET',
              params:{
                token: this.$store.state.token
              }
            }).then(function (response) {

              that.ArticleDetail = response.data.results
            })

          },


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
