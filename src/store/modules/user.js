// 用户相关状态管理模块
import { createSlice } from '@reduxjs/toolkit';
import { request } from '@/utils';

const userStore = createSlice({
  name: 'user',
  // 数据初始状态
  // 优先从 localStorage 中读取 token
  initialState: {
    token: localStorage.getItem('token_key') || ''
  },
  // 同步修改方法
  // 保存 token 数据
  reducers: { 
    setToken(state, action) {
      state.token = action.payload;
      // localStorage 本地持久化存储 token
      localStorage.setItem('token_key', action.payload);
    }
  }
});

// 解构 actionCreator
const { setToken } = userStore.actions;

// 获取 reducer 函数
const userReducer = userStore.reducer;

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 1. 发送异步请求
    const res =  await request.post('/authorizations', loginForm)
    // 2. 提交同步action进行token存入
    dispatch(setToken(res.data.token)) ;
  }
};

export { fetchLogin, setToken }; 

export default userReducer;