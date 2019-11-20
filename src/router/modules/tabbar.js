import TabbarView from '@/views/components/tabbarView'

//主页，我的，+++

export const children = [
  {
    path: "home",
    name: "home",
    component: ( ) => import( /* webpackChunkName: 'home' */ "@/views/tabbar/home" ),
    meta: {
      icon: "home",
      title: "home",
      keepAlive: true,
    }
    },
  {
    path: "me",
    name: "me",
    component: ( ) => import( /* webpackChunkName: 'me' */ "@/views/tabbar/me" ),
    meta: {
      icon: "me",
      title: "me",
      keepAlive: true,
    }
  },



  ]

export default {
  path: '/tabbar',
  component: TabbarView,
  redirect: '/tabbar/home',
  name: 'tabbar',
  meta: {
    title: 'tabbar',
  },
  children
}


