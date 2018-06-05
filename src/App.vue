<template>
  <div id="app">
    <el-container style="width: 1140px;margin: 0 auto">
      <el-header style="padding: 0;height: 400px;">
        <el-container>
          <el-col :span="12">
            <span style="line-height: 40px;">2018年05月29日 星期二</span>
          </el-col>
          <el-col :span="12" align="right">
            <span style="line-height: 40px;">xxx,欢迎您！</span>
            <el-button style="padding: 8px 8px">登录</el-button>
          </el-col>
        </el-container>
        <div class="bg" style="height: 300px;background-color: salmon">
        </div>
        <el-menu mode="horizontal">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-menu-item index="2">处理中心</el-menu-item>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">处理中心</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <router-view></router-view>
      <el-footer style="background-color: blueviolet">footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
