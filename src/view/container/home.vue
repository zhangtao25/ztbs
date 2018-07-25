<style>
  #home{background-color: white}
  #home>.top{display: flex;justify-content:space-between;padding: 15px 8px 15px 8px}
</style>
<template>
  <div id="home" class="margin">
    <div class="top">
      <page-content :detail="wenzhang[0]"></page-content>
      <page-content :detail="wenzhang[1]"></page-content>
      <page-content :detail="wenzhang[2]"></page-content>
    </div>
    <div class="bottom"></div>
  </div>
</template>
<script>
  import PageContent from './../../components/page-content'
  import axios from 'axios'
  export default {
    components:{
      'page-content': PageContent
    },
    data() {
      return {
        wenzhang:[
          {"type": "","content": [{"title": "","content": ""}]},
          {"type": "","content": [{"title": "","content": ""}]},
          {"type": "","content": [{"title": "","content": ""}]},
        ]
      }
    },
    mounted() {
      this.initWenzhang()
    },
    methods: {
      initWenzhang() {
        let _this = this;
        let wenzhang = [];
        axios.get('/static/articles/zcfg.json').then( res => {
          wenzhang.push(res.data)
        }).then((res)=>{if (wenzhang.length==3){_this.wenzhang = wenzhang} })

        axios.get('/static/articles/dwgk.json').then( res => {
          wenzhang.push(res.data)
        }).then((res)=>{if (wenzhang.length==3){_this.wenzhang = wenzhang} })

        axios.get('/static/articles/cjwt.json').then( res => {
          wenzhang.push(res.data)
        }).then((res)=>{if (wenzhang.length==3){_this.wenzhang = wenzhang} })

      }
    }
  }
</script>
