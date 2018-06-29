import axios from 'axios'

function getArticles(){
  return axios.get('/static/articles.json').then((res)=>{
      return res.data
    })
}

export default {
  getArticles
}
