import Vue from "vue"
import Router from "vue-router"
// import store from "../store/index"
import routes from './routes'
import { getToken } from "@/libs/util"
import { loading } from "@/plugins/loading"
import store from "@/store"
Vue.use( Router )
const router = new Router( {
  routes
} )

const LOGIN_PAGE_NAME = 'login'
const HOME_PAGE_NAME = "home"
const whiteList = [ LOGIN_PAGE_NAME, HOME_PAGE_NAME, "me", "register", "forgetPwd", "findPwd","urlView","pact", "aboutUs" ] // 可以不登入的白名单

const hasToken = ( to, from, next ) => {
  if ( to.name === LOGIN_PAGE_NAME ) {
    next( { // 如果要跳转到登入页面,就定位到主页
      name: HOME_PAGE_NAME
    } )
  } else {
    if ( store.state.user.id !== "" ) {
      next( )
    } else {
      store.dispatch( "user/getUserInfo" ).then( ( ) => {
        next( )
      }, ( ) => {
        store.dispatch( "user/resetToken" ).then( ( ) => {
          next( {
            name: LOGIN_PAGE_NAME,
            query: {
              redirect: to.name,
            }
          } )
        } )

      } )
    }

  }
}


/**
 * 没有token的处理
 */
const hasNoToken = ( to, from, next ) => {
  if ( whiteList.indexOf( to.name ) !== -1 ) { // 查看登入白名单
    next( )
  } else {
    next( {
      name: LOGIN_PAGE_NAME, //`/login?redirect=${to.path}`
      query: {
        redirect: to.name,
      }
    } )
  }
}



router.beforeEach( ( to, from, next ) => {
  loading.show( )
  const token = getToken( )
  // console.log( token )
  if ( token ) {
    hasToken( to, from, next )
  } else {
    hasNoToken( to, from, next )
  }
} )

router.afterEach( function ( ) {
  loading.hide( )
} )
export default router
