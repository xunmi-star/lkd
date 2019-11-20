import tabbar from "./modules/tabbar"
import user from "./modules/user"
import product from './modules/product';
import pact from "../components/Pact.vue"
import aboutUs from "../components/AboutUs.vue"
const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/tabbar",
  },
  {
    path: "/user/register/pact",
    name: "pact",
    component: pact,
  },
  {
    path: "/tabbar/aboutUs",
    name: "aboutUs",
    component: aboutUs,
  },

  tabbar,
  ...user,
  product,
  // {
  //   path: "/home",
  //   name: "home",
  //   component: Home,
  //   meta: {
  //     keepAlive: true,
  //   },
  // }, {
  //   path: "/me",
  //   name: "me",
  //   component: ( ) => import( /* webpackChunkName: 'me' */ "../views/me" ),
  //   meta: {
  //     keepAlive: true,
  //   }
  // }, {
  //   path: "/feedback",
  //   name: "feedback",
  //   component: ( ) => import( /* webpackChunkName: 'feedback' */ "../views/feedback" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // }, {
  //   path: "/updatePwd",
  //   name: "updatePwd",
  //   component: ( ) => import( /* webpackChunkName: 'updatePwd' */ "../views/updatePwd" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // }, 


  // {
  //   path: "/urlView",
  //   name: "urlView",
  //   component: ( ) => import( /* webpackChunkName: 'urlView' */ "../views/urlView" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // }, 


  //{
  //   path: "/products/*",
  //   name: "products",
  //   component: ( ) => import( /* webpackChunkName: 'products' */ "../views/products" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // }, {
  //   path: "/login",
  //   name: "login",
  //   component: ( ) => import( /* webpackChunkName: 'login' */ "../views/login" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // }, {
  //   path: "/register",
  //   name: "register",
  //   component: ( ) => import( /* webpackChunkName: 'register' */ "../views/register" ),
  //   meta: {
  //     keepAlive: false,
  //   }
  // },
 ]


export default routes
