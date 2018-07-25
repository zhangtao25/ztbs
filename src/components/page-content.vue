<style>
  .page_content{width: 322px;border: 1px #e0e0e0 solid;}
  .page_content>.top{overflow: hidden;border-bottom: 1px #e0e0e0 solid}
  .page_content>.top>span{
    font-weight: bold;
    color: #da9200;
    line-height: 30px;
    float: left;
    margin-left: 20px;
  }
  .page_content>.top>a{
    color: black;
    line-height: 30px;
    float: right;
    margin-right: 10px;
  }
  .page_content>.bottom{box-sizing: border-box;padding: 0 5px 0 5px}
  .page_content>.bottom>li{
    background: url(./../assets/li_ico.png) no-repeat left;
    line-height: 32px;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .page_content>.bottom>li:hover{cursor: pointer}
</style>
<template>
  <div class="page_content">
    <div class="top">
      <span>{{detail.type}}</span>
      <a href="">更多</a>
    </div>
    <ul class="bottom">
      <li v-for="(item,index) of detail.content" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>
<script>
  // import zcfg from '/static/zcfg.json'
  export default {
    data() {
      return {}
    },
    props:['detail'],
  }
</script>
