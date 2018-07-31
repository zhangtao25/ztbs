<style>

</style>

<template>
  <page-content-detail :titleList="titleList" :wenzhang="wenzhang[1]"></page-content-detail>
</template>
<script>
import PageContentDetail from './../../components/page-content-detail'
import axios from 'axios'
export default {
  components:{
    'page-content-detail': PageContentDetail
  },
  data() {
    return {
      titleList: ["党务公开","欢迎各级党务志愿者解答问题","参与服务先锋评选活动"],
      wenzhang:[
          {"type": "","content": [{"title": "","content": ""}]},
          {"type": "","content": [{"title": "","content": ""}]},
          {"type": "","content": [{"title": "","content": ""}]},
        ]
    }
  },
  mounted() {
    this.initWenzhang();
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
