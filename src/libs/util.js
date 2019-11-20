// import Cookies from 'js-cookie'
// cookie保存的天数
// import config from '@/config'
// import { forEach, hasOneOf, objEqual } from '@/libs/tools'
// const { cookieExpires } = config

export const TOKEN_KEY = 'lkd_token'

export const setToken = ( token ) => {

  localStorage.setItem( TOKEN_KEY, token )
  // Cookies.set( TOKEN_KEY, token, { expires: cookieExpires || 1 } )
}

export const getToken = ( ) => {
  const token = localStorage.getItem( TOKEN_KEY )
  // const token = Cookies.get( TOKEN_KEY )
  console.log( "getToken", token )
  if ( token ) return token
  else return false
}
export function removeToken ( ) {
  // Cookies.remove( TOKEN_KEY )
  return localStorage.removeItem( TOKEN_KEY )
}
