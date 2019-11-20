import NavView from "@/views/components/navView"



const productRouter = {
  path: '/product',
  component: NavView,
  // redirect: '/user/login',
  name: 'product',
  meta: {
    title: 'product',
  },
  children: [
    {
      path: "list/:id",
      name: "list",
      component: ( ) => import( /* webpackChunkName: 'list' */ "@/views/product/list" ),
      meta: {
        title: "list",
        keepAlive: false,
      }
    },
    {
      path: "urlView",
      name: "urlView",
      component: ( ) => import( /* webpackChunkName: 'urlView' */ "@/views/product/urlView" ),
      meta: {
        title: "urlView",
        keepAlive: false,
      }
    },
  ]
}


export default productRouter
