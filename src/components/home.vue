<template>
  <el-container style="">
    <el-col :span="8" style="border: 1px solid #ccc;margin: 10px;padding: 10px" v-for="(i,index) of [1,2,3]" :key="index">
      <el-container>
        <el-col :span="12">title</el-col>
        <el-col :span="12" align="right"><el-button>{{$t('Home.More')}}</el-button></el-col>
      </el-container>
      <ul>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
      </ul>
      <div class="box1" @click="fn1">
        <div class="box2" @click="fn2"></div>
      </div>
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
        xxx:[1,2,3]
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
      // console.log(this.$t('message'))
    }
  }
</script>
