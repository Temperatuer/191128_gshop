/*
ajax请求函数模块
* */
import axios from 'axios'

export default function (url, data = {}, type = 'GET') {
  return new Promise(function (resolve,reject) {
    let promise
    if(type==='GET'){
      //准备URL query参数数据
      let dataStr = '';
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr !== ''){
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url=url+'?'+dataStr
      }
      //发送get请求
      promise = axios.get(url)
    }else{
      promise = axios.post(url,data)
    }
    promise.then(function(response){
        resolve(response.data)
    }).catch(function (error) {
        reject(error)
    })
  })

}
