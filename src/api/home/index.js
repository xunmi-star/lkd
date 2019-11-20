import request from '@/tools/request'

export function getHomeData ( data, method = "post" ) {
  return request( {
    // url: '/lkjz_cms/home',
    url: '/lkjz_cms/homePage',
    method,
    data
  } )
}
export function getUrl ( method = "post" ) {
  return request( {
    url: '/lkjz_cms/getAboutUrl',
    method,
  } )
}

// 点击轮播图调用接口
export function bannerLog ( data, method = "post" ) {
  return request( {
    // url: '/lkjz_cms/showBanner',
    url: '/lkjz_cms/showBannerFjxd',
    method,
    data
  } )
}
