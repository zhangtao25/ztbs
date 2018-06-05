<template>
  <el-container style="">
    <el-col :span="8" style="border: 1px solid #ccc;margin: 10px;padding: 10px" v-for="(i,index) of [1,2,3]" :key="index">
      <el-container>
        <el-col :span="12">title</el-col>
        <el-col :span="12" align="right"><el-button>more</el-button></el-col>
      </el-container>
      <ul>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
        <li>Title of article article article article article article article article article article</li>
      </ul>
    </el-col>
  </el-container>
</template>
<script>
  export default {
    data(){
      return{
        xxx:[1,2,3]
      }
    }
  }
</script>
