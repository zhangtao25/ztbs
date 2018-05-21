<template>
  <el-container id="main" style="width: 1140px;margin: 0 auto">
    <!--<el-header style="height: 200px">-->
      <!--Header-->
      <!--<el-menu mode="horizontal">-->
        <!--<el-menu-item index="1">首页</el-menu-item>-->
        <!--<el-menu-item index="2">最新公告</el-menu-item>-->
        <!--<el-menu-item index="3">基本介绍</el-menu-item>-->
        <!--<el-menu-item index="4">最新动态</el-menu-item>-->
        <!--<el-menu-item index="5">先锋礼赞</el-menu-item>-->
        <!--<el-menu-item index="6">思想引领</el-menu-item>-->
      <!--</el-menu>-->
    <!--</el-header>-->
    <!--&lt;!&ndash;!!!&ndash;&gt;-->
    <!--<router-view></router-view>-->
    <!--&lt;!&ndash;!!!&ndash;&gt;-->
    <!--<el-footer>-->
      <!--<p>党员服务站 | 站点地图 | 友情链接 | 管理入口</p>-->
      <!--<p>Powered by 学生处 © 2001-2009 重庆工商大学</p>-->
    <!--</el-footer>-->
  </el-container>
</template>
<style>
  .el-header{background-color: #b3c0d1;}
  .el-aside{background-color: #e9eef3;}
  .el-main{background-color: #d3dce6;}
  .el-footer{background-color: #e9eef3;}
</style>

<script>
  export default {
    data() {
      return{

      }
    },
    methods:{
      ssss(){
        this.$router.push('/home/xxx')
      }
    }
  };
</script>
