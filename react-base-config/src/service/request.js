import axios from "axios"
 

axios.defaults.timeout = 10000;
axios.defaults.baseURL = "http://api.gongcing.net/v1/"
// 请求前的校验
axios.interceptors.request.use((confog)=>{
    confog['transformRequest']= [function (data) {
        //登录信息
        data['sid'] = 'EZEJ2MEYIC5UsJ-VFumDqXqDYksRnQAXIJ5Q5IpDm@rRb82BXh6SoL8Cn7o'
        let retData = '';
        for (let it in data) {
            retData += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
        }
        return retData;
      }]
    confog['headers']['Content-Type'] = 'application/x-www-form-urlencoded'
    return confog
},error=>{
    return Promise.reject(error);
})
// 请求成功后的返回
axios.interceptors.response.use( (response)=> {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default axios