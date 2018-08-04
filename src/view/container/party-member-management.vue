<style>
#party-member-management{margin: 0 auto;width: 1000px;}
</style>

<template>
  <div id="party-member-management">
    <el-row class="tac">
      <el-col :span="6" style="padding: 10px">
        <el-menu default-active="1-1">
          <!-- nav1 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>党员信息管理</span>
            </template>
            <el-menu-item index="1-1" @click="fn('1-1')">
              <i class="el-icon-location"></i>
              <span>新增党员信息</span>
            </el-menu-item>
            <el-menu-item index="1-2" @click="fn('1-2')">
              <i class="el-icon-location"></i>
              <span>删除党员信息</span>
            </el-menu-item>
            <el-menu-item index="1-3" @click="fn('1-3')">
              <i class="el-icon-location"></i>
              <span>更改党员信息</span>
            </el-menu-item>
            <el-menu-item index="1-4" @click="fn('1-4')">
              <i class="el-icon-location"></i>
              <span>查询党员信息</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="18" class="pmm_main" style="padding: 10px">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    },
    mounted(){
      this.$router.push({path:"/container/pmm/pmmadd"})
    },
    methods: {
      fn(index){
        let obj = {
          "1-1":"add",
          "1-2":"del",
          "1-3":"change",
          "1-4":"find"
          }
          console.log(obj[index])
        this.$router.push({path:"/container/pmm/pmm"+obj[index]})
      }
    }
  }
</script>
