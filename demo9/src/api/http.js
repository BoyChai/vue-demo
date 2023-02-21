import axios from "axios";

const http = axios.create({
    baseURL:"http://api.boychai.xyz/test",
    timeout:3000,
})

// 拦截器:请求拦截
http.interceptors.request.use(config => {
    // 在请求的时候做什么
    // 例如在header里面加入内容
    config.headers['test-header'] = "123"

    return config
},error => {
    //处理请求错误
    return Promise.reject(error)
})

// 拦截器:响应拦截
http.interceptors.response.use(resp => {
    // 处理响应数据
    if (resp.data.code != 200){
        alert("请求失败")
    }
    return resp
},error => {
    // 处理响应错误
    alert("请求服务器返回错误")
    return Promise.reject(error)
})

export default http