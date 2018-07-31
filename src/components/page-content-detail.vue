<style>
#page-content-detail>.margin{overflow: hidden;background-color: white}
#page-content-detail>.margin>.l{width: 217px;float: left;margin: 10px 0 0 10px;}
#page-content-detail>.margin>.r{width: 750px;float: right;margin-top: 20px;background-color: white;}
#page-content-detail>.margin>.l>.l_title{color: white;background-color: #d90c13;text-align: center;line-height: 31px;font-weight: bold}
#page-content-detail>.margin>.l>.l_list{background-color: #f8f7f7}
#page-content-detail>.margin>.l>.l_list>li{
  background: url("./../assets/wei_05.png") no-repeat left;
  line-height: 32px;
  width: 200px;
  margin-left: 10px;
  padding-left: 20px;
  padding-right: 10px;
  border-bottom: 1px #ebeaea solid;
  }
#page-content-detail>.margin>.r>.r_list>li {
  background: url("./../assets/li_ico.png") no-repeat left;
  line-height: 35px;
  padding-left: 10px;
  font-size: 14px;
  font-family: "宋体";
  margin-left: 10px;
  overflow: hidden;
  }
#page-content-detail>.margin>.r>.r_list>li>a{float: left;line-height: 35px;color: #2a2a2a;}
#page-content-detail>.margin>.r>.r_list>li>a:hover{color: #da5f5f;}
#page-content-detail>.margin>.r>.r_list>li>span{float: right;line-height: 35px;color: #2a2a2a;margin-right: 10px;}
</style>
<template>
  <div id="page-content-detail">
    <div class="margin">
      <div class="l">
        <p class="l_title">{{wenzhang.type}}</p>
        <ul class="l_list">
          <li v-for="(item,index) of titleList" :key="index">{{item}}</li>
        </ul>
      </div>
      <div class="r">
        <ul class="r_list">
          <li v-for="(item,index) of wenzhang.content" :key="index"><a href="">{{item.title}}</a><span>[2018/7/25]</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:['titleList','wenzhang'],
  mounted() {
    console.log(this.wenzhang)
  }
}
</script>
