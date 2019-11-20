import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './lang/cn'
import en from './lang/en'
import ind from "./lang/ind"
import store from "@/store"
Vue.use( VueI18n )

// 自动根据浏览器系统语言设置语言
// const navLang = navigator.language
// const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false

// Vue.config.lang = lang
// vue-i18n 6.x+写法
Vue.locale = ( ) => {}

const i18n = new VueI18n( {
  locale: store.state.app.lang,
  messages: {
    cn,
    en,
    ind
  }
} )

export default i18n
