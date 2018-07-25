import * as types from "./types";

export default {
  "changeTheLoginState":({commit,state},payload)=>{
    if (payload.user_type=='root'){
      commit("changeToRoot",payload);
      console.log(123);
    }else {
      commit("changeToUser",payload);
    }
  },
  "logout":({commit,state},payload)=>{
    commit("logout",payload);
  }
}
