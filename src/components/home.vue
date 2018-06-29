<template>
  <el-container style="">
    <el-col :span="8" style="border: 1px solid #ccc;margin: 10px;padding: 10px" v-for="(lan,index) of lans" :key="index">
      <el-container>
        <el-col :span="12">{{lan.lanName}}</el-col>
        <el-col :span="12" align="right"><el-button>{{$t('Home.More')}}</el-button></el-col>
      </el-container>
      <ul>
        <li v-for="(article,index) of lan.articles" :key="index">{{article}}</li>
      </ul>
    </el-col>
  </el-container>
</template>
<style>
  .box1{width: 200px;height: 200px;background-color: coral;}
  .box2{width: 100px;height: 100px;background-color: cornflowerblue;}
</style>
<script>
  export default {
    data(){
      return{
        lans:[
          {lanName:'政策法规',articles:['art1','art2','art3','art4']},
          {lanName:'党务公开',articles:['art1','art2','art3','art4']},
          {lanName:'答疑解惑',articles:['art1','art2','art3','art4']}
        ]
      }
    },
    methods:{
      fn1(){
        alert(1);
      },
      fn2(){
        alert(2);
      }
    },
    mounted(){
    }
  }
</script>
