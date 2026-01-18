// axios 封装处理
import axios from 'axios';

// 1. 根域名配置
// 2. 超时时间
// 3. 请求拦截器配置 / 响应拦截器配置

const request = axios.create({
    baseURL: 'https://geek.ithemia.net/v1_0', // 根域名,项目间修改
    timeout: 5000,
});

// 请求拦截器配置
// 要点：在请求发送前进行拦截，插入自定义配置 [参数的处理]
request.interceptors.request.use((config) => {
    // 请求发起会经过这里
    // config 配置对象
    return config;
}, (error) => {
    // 请求出错会经过这里
    return Promise.reject(error);
});

// 响应拦截器配置
// 要点：在响应到达客户端之前进行拦截，处理返回的数据 [数据的处理]
request.interceptors.response.use((response) => {
    // 响应成功会经过这里
    return response.data;
}, (error) => {
    // 响应失败会经过这里
    return Promise.reject(error);
});

export { request };