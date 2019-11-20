// import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import router from '@/router'

import md5 from "./md5"
import { loading } from "@/plugins/loading"
import { toast } from "@/plugins/toast"
import { getToken } from '@/libs/util'
import config from "@/config"

const langMap = {
  cn: "zh_CN",
  en: "en_US",
  ind: "ind"
}
const service = axios.create( {
  // baseURL: process.env.NODE_ENV === "production" ? config.baseUrl.pro : config.baseUrl.dev,
  //baseURL:"http://47.112.117.37:8080",    //测试服
  baseURL:"http://www.luckyjz.com/",    //正式服
  // withCredentials: true, // 允许携带cookies
  time: 5000, // 超时时间
} )

service.interceptors.request.use( config => {
  loading.show( )

  config.headers[ 'Content-Type' ] = 'application/json'
  config.headers[ 'opSource' ] = 'ANDROID'
  config.headers[ 'subKey' ] = 'HC'
  config.headers[ 'storeKey' ] = 'VIVO'
  config.data = config.data || {}
  let token = getToken( )
  if ( token ) {
    config.headers[ 'token' ] = getToken( )
  }
  const megeCofig = Object.assign( {}, config.data )
  let sign = ( ( data ) => {
    let keys = Object.keys( data )
    let s = ""
    let list = keys.sort( ).map( key => `${key}=${data[key]}` )
    list.push( "android_key" )
    s = list.join( "&" )
    // s = encodeURIComponent( s )
    console.log( "sign字符串", s )
    return s
  } )( megeCofig )
  config.headers[ 'sign' ] = md5( sign )
  config.headers[ "lang" ] = langMap[ store.state.app.lang ]

  config.data = megeCofig
  return config
}, error => {
  console.log( "请求错误", error )
  loading.hide( )
  return Promise.reject( error )
} 
)

service.interceptors.response.use( res => {

    const data = res.data
    loading.hide( )
    switch ( data.code ) {
    case "000000": {
      return data.data || data
    }
    case "000010": // 没有登入
    {
      store.dispatch( 'user/resetToken' )
      router.push( { name: "login" } )
      break
    }
    case "000020": {
      break
    }
    default: {
      break
    }

    }
    toast.show( data.msg || "error" )
    return Promise.reject( data.msg || "error" )
  },
  error => {
    loading.hide( )
    console.log( 'err' + error ) // for debug

    return Promise.reject( error )
  } )

export default service
