<style>
  #container>#top{width: 100%;height: 39px;background: #d90c13;}
  #container>#top>.margin{height: 39px}
  #container>#top>.margin>.date_content{float: left;color: white;line-height: 39px}
  #container>#top>.margin>.login_content{float: right;width: 400px}
  #container>#top>.margin>.login_content>span{color: white;line-height: 39px}
  #container>#top>.margin>.login_content>span:nth-child(2){margin-left: 10px}
  #container>#top>.margin>.login_content>a{color: white;line-height: 39px;margin-left: 10px}
  #container>#top>.bg{height: 743px;background-image: url("./../assets/bg.png")}
  #container>#banner>.margin{height: 217px;background-image: url("./../assets/banner.png")}
  #container>#nav>.margin{display: flex;background-color: #d90c13}
  #container>#nav>.margin>li{background-color: #d90c13;width: 141px;height: 36px;text-align: center;}
  #container>#nav>.margin>li:hover{background-color: #e80c13;cursor: pointer}
  #container>#nav>.margin>li>a{display: block;color: white;font-weight: 700;font-size: 16px;line-height: 36px}
  #container>#yq_link>.margin{height: 41px;background-color: #ebebeb}
  #container>#yq_link>.margin>span{margin-left: 12px;font-size: 15px;font-weight: bold;color: #340000;line-height: 41px;}
  #container>#yq_link>.margin>a{margin: 0 10px 0 10px;color: #000;font-size: 14px;}
  #container>#bottom>.margin{border-top: 5px solid red;margin-top: 10px}
  #container>#bottom>.margin>p{color: #2a2a2a;text-align: center;font-size: 14px;line-height: 45px;}
  .margin{width: 1000px;margin: 0 auto}
</style>
<template>
  <div id="container">
    <div id="top">
      <div class="margin">
        <span class="date_content">{{dateContent}}</span>
        <div class="login_content">
          <span>欢迎访问大学生党员工作站服务平台</span>
          <span>你好，admin</span>
          <!--<a href="">登录</a>-->
          <a href="">退出</a>
        </div>
      </div>
      <div class="bg">
      </div>
    </div>

    <div id="banner">
      <div class="margin">
      </div>
    </div>

    <div id="nav">
      <ul class="margin">
        <!--<li v-for="(item,index) of navLists" :key="index"><a href="">{{item}}</a></li>-->
        <li><router-link to="/container/home">首页</router-link></li>
        <li><router-link to="/container/zcfg">政策法规</router-link></li>
        <li><router-link to="/container/dwgk">党务公开</router-link></li>
        <li><router-link to="/container/cjwt">常见问题</router-link></li>
        <li><router-link to="/container/home">首页</router-link></li>
        <li><router-link to="/container/home">首页</router-link></li>
        <li><router-link to="/container/home">首页</router-link></li>
      </ul>
    </div>

    <router-view></router-view>

    <div id="yq_link">
      <div class="margin">
        <span>友情链接：</span>
        <a :href="item.address" target="_blank" v-for="(item,index) of yqLink" :key="index">{{item.name}}</a>
      </div>
    </div>

    <div id="bottom">
      <div class="margin">
        <p>版权所有：张涛</p>
        <p>技术支持：张涛</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        dateContent:'',
        navLists:["首页","政策法规","党务公开","党务公开","党务公开","党务公开","党务公开"],
        yqLink:[
          {'name': '共产党员网','address': 'http://www.12371.cn/'},
          {'name': '中纪委官网','address': 'http://www.ccdi.gov.cn/'}
        ]
      }
    },
    mounted() {
      this.initDateContent();
    },
    methods:{
      initDateContent() {
        let dateContent = new Date()
        let dayObj =  ['日','一','二','三','四','五','六'];
        this.dateContent = dateContent.getFullYear()+"年"+(dateContent.getMonth()+1)+"月"+dateContent.getDate()+"日"+"星期"+dayObj[dateContent.getDay()];
      }
    }
  }
</script>
