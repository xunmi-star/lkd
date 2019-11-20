import FormView from '@/views/components/formView'
import NavView from "@/views/components/navView"

const userRuter = {
  path: '/user',
  component: FormView,
  redirect: '/user/login',
  name: 'user',
  meta: {
    title: 'user',
  },
  children: [
    {
      path: "login",
      name: "login",
      component: ( ) => import( /* webpackChunkName: 'login' */ "@/views/user/login" ),
      meta: {
        title: "login",
        keepAlive: false,
      }
    },
    {
      path: "register",
      name: "register",
      component: ( ) => import( /* webpackChunkName: 'register' */ "@/views/user/register" ),
      meta: {
        title: "register",
        keepAlive: false,
      }
    }, 
    {
      path: "findPwd",
      name: "findPwd",
      component: ( ) => import( /* webpackChunkName: 'findPwd' */ "@/views/user/findPwd" ),
      meta: {
        title: "findPwd",
        keepAlive: false,
      }
    },
    {
      path: "temp",
      name: "temp",
      component: ( ) => import( /* webpackChunkName: 'findPwd' */ "@/views/user/temp" ),
      meta: {
        title: "temp",
        keepAlive: false,
      }
    },
  ]
}

const userRuter2 = {
  path: '/user',
  component: NavView,
  // redirect: '/user/login',
  // name: 'user',
  meta: {
    title: 'user',
  },
  children: [
    {
      path: "feedback",
      name: "feedback",
      component: ( ) => import( /* webpackChunkName: 'feedback' */ "@/views/user/feedback" ),
      meta: {
        title: "feedback",
        keepAlive: false,
      }
    },
    {
      path: "updatePwd",
      name: "updatePwd",
      component: ( ) => import( /* webpackChunkName: 'updatePwd' */ "@/views/user/updatePwd" ),
      meta: {
        title: "updatePwd",
        keepAlive: false,
      }
    },
    // {
    //   path: "urlView",
    //   name: "urlView",
    //   component: ( ) => import( /* webpackChunkName: 'urlView' */ "@/views/product/urlView" ),
    //   meta: {
    //     title: "urlView",
    //     keepAlive: false,
    //   }
    // },
  ]
}


export default [userRuter, userRuter2 ]
