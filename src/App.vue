<template>
  <div id="app">
    <el-container style="width: 1140px;margin: 0 auto">
      <el-header style="padding: 0;height: 400px;">
        <el-container>
          <el-col :span="12">
            <span style="line-height: 40px;">2018年05月29日 星期二</span>
          </el-col>
          <el-col :span="12" align="right">
            <span style="line-height: 40px;">{{getUsername}},{{$t('App.Welcome')}}！</span>
            <el-button style="padding: 8px 8px" @click="logout">{{$t('App.Logout')}}</el-button>
            <login></login>
            <el-button style="padding: 8px 8px">{{$t('App.Register')}}</el-button>
          </el-col>
        </el-container>
        <div class="bg" style="height: 300px;background-color: skyblue">
        </div>
        <el-menu mode="horizontal">
          <el-menu-item index="1">
            <router-link to="/home">首页</router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link to="/PoliciesAndRegulations">政策法规</router-link>
          </el-menu-item>
          <el-menu-item index="3">党务公开</el-menu-item>
          <el-menu-item index="4">入党申请</el-menu-item>
          <el-menu-item index="5">党员信息管理</el-menu-item>
          <el-menu-item index="6">答疑解惑</el-menu-item>
        </el-menu>
        <div class="line"></div>
      </el-header>
      <router-view></router-view>
      <el-footer style="background-color: blueviolet">footer</el-footer>
    </el-container>


  </div>
</template>
<style>
</style>
<script>
  import {mapGetters,mapActions} from 'vuex'
  import login from './components/login'
export default {
  name: 'App',
  components:{
    login
  },
  data(){
    return {
    }
  },
  computed:{
    ...mapGetters(['getUsername'])
  },
  methods:{
    ...mapActions(['logout'])
  }
}
</script>

<style>
</style>
