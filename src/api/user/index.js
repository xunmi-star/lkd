import request from '@/tools/request'
import md5 from 'js-md5'

export function login ( data, method = "post" ) {
  data.password = md5( data.password )
  return request( {
    url: '/lkjz_cms/sysUserLogin',
    method,
    data
  } )
}
// export function logout ( method = "post" ) {
//   return request( {
//     url: '/lkjz_cms/sysUserLogout',
//     method,
//   } )
// }

export function register ( data, method = "post" ) {
  data.password = md5( data.password )
  return request( {
    url: '/lkjz_cms/insertSysUser',
    method,
    data
  } )
}

export function updatePwd ( data, method = "post" ) {
  return request( {
    url: '/lkjz_cms/updateSysUserPassWord',
    method,
    data: {
      oldPwd: md5( data.oldPwd ),
      newPwd: md5( data.newPwd ),
      pwd: md5( data.pwd ),
    }
  } )
}
export function findPwd ( data, method = "post" ) {
  data.password = md5( data.password )
  return request( {
    url: '/lkjz_cms/findSysUserPassWord',
    method,
    data
  } )
}
export function feedback ( data, method = "post" ) {
  return request( {
    url: '/lkjz_cms/addFeedBack',
    method,
    data
  } )
}

export function getVeriCode ( data, method = "post" ) {
  return request( {
    url: '/lkjz_cms/getVerifiCode',
    method,
    data
  } )
}

export function resetPwd ( data, method = "post" ) {
  data.pwd = md5( data.pwd )
  data.newPwd = md5( data.newPwd )
  return request( {
    url: '/lkjz_cms/resetPassWord',
    method,
    data
  } )
}
export function getUserInfo ( method = "post" ) {
  return request( {
    url: '/lkjz_cms/tokenGetUser',
    method,
  } )
}

// 新加的api接口
export function getAboutUrl ( method = "post" ) {
  return request( {
    url: '/lkjz_cms/getAboutUrl',
    method,
  } )
}


