<template>
  <span>
    <el-button style="padding: 8px 8px" @click="dialogVisible = true">{{$t('App.Login')}}</el-button>

    <el-dialog
      title="登录"
      :visible.sync="dialogVisible"
      width="400px"
      :before-close="handleClose">
      <el-form :model="loginForm" :rules="loginRules" ref="innerForm">
        <el-form-item prop="username">
          <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('innerForm')" style="padding: 12px 50px">登录</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </span>
</template>
<script>
  import {mapActions,mapGetters} from 'vuex'
  export default {
    data(){
      return {
        dialogVisible: false,
        loginForm:{
          username:'',
          password:''
        },
        loginRules:{
          username:[{required: true, message: '请输入活动名称', trigger: 'blur'}],
          password:[{required: true, message: '请输入活动名称', trigger: 'blur'}]
        }
      }
    },
    computed:{
      ...mapGetters(['getUsername'])
    },
    methods:{
      ...mapActions(['changeTheLoginState']),
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.checkUser(this.loginForm)){
              this.dialogVisible=false;
              this.changeTheLoginState({user_type:'root',user_name:this.loginForm.username});
            }
          } else {
            this.$message.error('错了哦，这是一条错误消息');
            return false;
          }
        });
      },
      checkUser(loginForm){
        if (loginForm.username=='zhangtao'&&loginForm.password==123){
          this.$message({
            message: '登陆成功',
            type: 'success'
          });
          return true
        } else {
          this.$message.error('用户名密码错误');
          return false
        }
      }
    }
  }
</script>
