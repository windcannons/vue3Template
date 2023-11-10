// 对axios进行二次封装

// 引入axios
import axios from 'axios';

// 通过axios创建实例
let requests =axios.create({
    baseURL:'/api',
    timeout: 10000,
})

// 设置请求拦截器  使请求头携带token
requests.interceptors.request.use(function (config) {
    const headers = config.headers;//获取请求头
    const token = window.localStorage.getItem('token');//获取本地存储中的userInfo，解构出token
    if(!headers.Authorization) headers.Authorization = `Bearer ${token}`;//附带上auth请求字段
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});


// 设置响应拦截器  处理返回的数据
requests.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default requests;
