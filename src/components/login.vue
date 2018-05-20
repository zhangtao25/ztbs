<template>
  <div class="login">
    <h1>大学党员工作站服务平台</h1>
    <div>
      <el-input v-model="yhm" placeholder="请输入用户名"></el-input>
      <el-input v-model="mm" placeholder="请输入密码" type="password"></el-input>
      <el-button @click="goindex">登录</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        yhm:'',
        mm:''
      }
    },
    methods:{
      goindex(){
        if (this.yhm == "zt"&&this.mm == "123"){
          this.$router.push('/');
        }else {
          this.open();
        }
      },
      open() {
        this.$alert('密码错误', '提示', {
          confirmButtonText: '确定'
        });
      }
    }
  }
</script>

<style>
  .login{width: 400px;border: 1px solid #409eff;padding: 10px;margin-left: 50%;margin-top:200px;transform: translate(-50%,0);text-align: center;}
  .login .el-input__inner{margin-top: 10px;margin-bottom: 10px;}
</style>
