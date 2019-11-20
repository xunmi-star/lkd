import Vue from 'vue'
import store from './store/index'
import App from './App.vue'
import router from './router/index'
//移动端调试
// import vcosole from "vconsole"
// new vcosole( )

import i18n from "@/locale"

import "./plugins/index"

import "./icons"
import Cell from './components/cell/index.vue'
Vue.component( 'cell', Cell )
import Btn from "./components/button/index.vue"
Vue.component( "btn", Btn )
// require("es6-promise").polyfill();
import 'vant/lib/index.css'
import {Checkbox, CheckboxGroup} from 'vant';
Vue.use(Checkbox).use(CheckboxGroup);

//导入vue-h5-plus
// import plus from 'vue-h5-plus'
// Vue.use(plus)

// 解决在移动端的300秒延迟现象
const FastClick = require( "fastclick" );
FastClick.attach( document.body );

// 阻止启动生产消息
Vue.config.productionTip = false

window.vm = new Vue( {
  router,
  i18n,
  store,
  render: h => h( App )
} ).$mount( '#app' )

//解决Hbuilder打包的apk文件按手机返回键直接退出软件问题
document.addEventListener('plusready', function() {
  var webview = plus.webview.currentWebview();
  plus.key.addEventListener('backbutton', function() {
      webview.canBack(function(e) {
          if(e.canBack) {
              webview.back();
          } else {
              webview.close(); //hide,quit按手机返回键直接退出APP
              //plus.runtime.quit();
          }
      })
  });
})


