import state from "./state";

export default {
  getimp:(state)=>{
    return state.imp;
  },
  getyhm:(state)=>{
    return state.yhm;
  },
  getall:(state)=>{
    return state.all;
  },
  herosState:(state)=>{
    return state.herosState
  },
  padding:(state)=>{
    return state.padding
  },
  getLoginState:(state)=>{
    return state.loginState
  },
  getUsername:(state)=>{
    return state.username
  }
}
