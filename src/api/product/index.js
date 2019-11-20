import request from '@/tools/request'
/**
 * 获取产品列表
 * @param {} data 
 */
export function getProList ( data ) {
  return request( {
    url: '/lkjz_cms/getProductList',
    method: 'post',
    data
  } )
}

/**
 * 点击产品打log
 * @param {} data 
 */
export function productLog ( data ) {
  return request( {
    url: '/lkjz_cms/downProduct',
    method: 'post',
    data
  } )
}
//http://47.112.117.37:8080/lkjz_cms/downProduct
