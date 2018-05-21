<template>
  <div id="app">
    <el-container class="te" style="width: 1000px;height:800px;margin: 0 auto">
      <el-header style="padding: 0;height:293px;background-color: #ff6600;">
        <el-row type="flex" class="row-bg" style="height: 39px;background-color: #d90c13">
          <el-col :span="12"><span>2018年05月21日 星期一</span></el-col>
          <el-col :span="12" align="right"><span>欢迎访问肥城智慧党务 登录 客户端</span></el-col>
        </el-row>
        <div class="bg"></div>
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">最新公告</el-menu-item>
          <el-menu-item index="3">基本介绍</el-menu-item>
          <el-menu-item index="4">最新动态</el-menu-item>
          <el-menu-item index="5">先锋礼赞</el-menu-item>
          <el-menu-item index="6">思想引领</el-menu-item>
        </el-menu>
      </el-header>
      <router-view/>
      <el-footer>footer</el-footer>
    </el-container>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{background-image: url("./assets/bg0.png");background-repeat: repeat-x;}
  #app .el-header .el-col span{font-size: 13px;color: white;line-height: 39px;}
  #app .el-header .bg{background-color: #666;height: 217px;}
  #app .el-header .el-menu-item{height: 36px;line-height: 36px;font-size: 16px;background-color: #d90c13;color: white;}
  #app .el-header .el-menu-item:hover{background-color: #e80c13;}
</style>
