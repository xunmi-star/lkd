/**
 * 全局vue插件
 * Created by rogen.
 */

import Vue from 'vue'

// 请求  $http
// import ajax from "./ajax/index";
// Vue.use(ajax)

// log打印  $log
//import log from "./log/index"
//Vue.use(log)

// 设备型号  $device
import device from "./device/index"

Vue.use( device )

// 全局toast 组件 $toast
import Toast from "./toast/index"

Vue.use( Toast, {
  type: "text",
  position: "top",
  time: 1500,
  isShowMask: true,
} );

// 全局loading 组件  $loading
import Loading from "./loading/index"

Vue.use( Loading, {
  text: "loading"
} )

// 全局注册验证组件
import valid from "./valid"
Vue.use( valid )
