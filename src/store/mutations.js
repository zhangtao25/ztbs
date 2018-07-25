import * as types from "./types";

export default {
  "changeToRoot":(state,payload)=> {
    state.loginState='root';
    state.username=payload.user_name;
  },
  "changeToUser":(state,payload)=> {
    state.loginState='user';
  },
  "logout":(state,payload)=> {
    state.loginState=false;
    state.username='';
  }
}
