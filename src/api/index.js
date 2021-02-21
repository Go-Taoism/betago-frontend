import axios from "axios"


// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     //window.localStorage.getItem("accessToken") 获取token的value
//     let token = window.localStorage.getItem("accessToken")
//     if (token) {
//         //将token放到请求头发送给服务器,将tokenkey放在请求头中
//         config.headers.accessToken = token;     
//         //也可以这种写法
//         // config.headers['accessToken'] = Token;
//          return config;
//     }
// }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
// });


export const registerApi = async (param) => {
    let res = await axios.post('api/user/register', param);
    return res;
}

export const loginApi = async (param) => {
    let res = await axios.post('api/user/login', param);
    return res;
}