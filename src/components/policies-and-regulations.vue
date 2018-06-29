<template>
  <el-container>
    <el-aside width="200px">
      <ul>
        <li>基层组织</li>
        <li>干部工作</li>
        <li>人才工作</li>
      </ul>
    </el-aside>
    <el-main>
      <ul>
        <li v-for="(i,index) of articles.type1" :key="index">
          <el-container>
            <el-col :span="20">
              <span @click="fn(i.content)">{{i.title}}</span>
            </el-col>
            <el-col :span="4">
              <span>2018年05月29日</span>
            </el-col>
          </el-container>
        </li>
      </ul>
      <vvv-article :article="article"></vvv-article>
    </el-main>
  </el-container>
</template>
<script>
  import axios from 'axios'
  import articleService from './../service/article'
  import vvvArticle from './../common/vvv-article'
  export default {
    components:{
      'vvv-article':vvvArticle
    },
    data(){
      return {
        articles:'',
        article:''
      }
    },
    created(){
      articleService.getArticles().then(res=>{
        this.articles=res
      });
    },
    methods:{
      fn(val){
        this.article=val
        console.log(val)
      }
    }
  }
</script>
