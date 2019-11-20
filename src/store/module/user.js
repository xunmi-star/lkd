import { getToken, setToken, removeToken } from '@/libs/util'
import { login, updatePwd, getVeriCode, register, resetPwd, getUserInfo } from "@/api/user"
// import { Store } from 'vuex';


const state = {
  token: getToken( ),
  avater: "", // 头像,
  name: "",
  id: "",
}
const mutations = {
  SET_TOKEN ( state, token ) {
    state.token = token
    setToken( token )
  },
  SET_NAME: ( state, name ) => {
    state.name = name
  },
  SET_AVATAR: ( state, avatar ) => {
    state.avatar = avatar
  },
  SET_ID: ( state, id ) => {
    state.id = id
  }
}

const actions = {
  login ( { commit }, data ) {
    return new Promise( ( resolve, reject ) => {
      login( data ).then( data => {
        console.log( "登入成功后的数据", data );
        commit( 'SET_TOKEN', data.token )
        commit( "SET_NAME", data.user.userName );
        commit( "SET_AVATAR", data.user.avatar );
        commit( "SET_ID", data.user.userId );

        resolve( data )
      } ).catch( error => {
        reject( error )
      } )
    } )
  },
  logout ( { dispatch }, ) {
    return new Promise( ( resolve ) => {
      dispatch( "resetToken" ).then( resolve )
    } )
  },
  getUserInfo ( { commit } ) {
    return new Promise( ( resolve, reject ) => {
      getUserInfo( ).then( data => {
        console.log( "获取用户的数据", data );
        commit( "SET_NAME", data.userName );
        commit( "SET_AVATAR", data.avatar );
        commit( "SET_ID", data.userId );
        resolve( data )
      } ).catch( error => {
        console.error( error )
        reject( error )
      } )
    } )
  },
  // remove token
  resetToken ( { commit } ) {
    return new Promise( resolve => {
      commit( 'SET_TOKEN', '' )
      commit( 'SET_ID', "" )
      commit( "SET_NAME", "" );
      commit( "SET_AVATAR", "" );
      removeToken( )
      resolve( )
    } )
  },
  updatePwd ( { dispatch }, data ) {
    return new Promise( ( resolve, reject ) => {
      updatePwd( data ).then( data => {
        dispatch( "resetToken" )
        resolve( data )
      } ).catch( error => {
        console.error( error )
        reject( error )
      } )
    } )
  },
  register ( { dispatch }, data ) {
    return new Promise( ( resolve, reject ) => {
      register( data ).then( data => {
        dispatch( "resetToken" )
        resolve( data )
      } ).catch( error => {
        console.error( error )
        reject( error )
      } )
    } )
  },
  // eslint-disable-next-line 
  getVeriCode ( { commit }, data ) {
    return new Promise( ( resolve, reject ) => {
      getVeriCode( data ).then( data => {
        resolve( data )
      } ).catch( error => {
        console.error( error )
        reject( error )
      } )
    } )
  },
  // eslint-disable-next-line 
  findPwd ( { dispatch }, data ) {
    return new Promise( ( resolve, reject ) => {
      resetPwd( data ).then( data => {
        // dispatch( "resetToken" )
        resolve( data )
      } ).catch( error => {
        console.error( error )
        reject( error )
      } )
    } )
  },

}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
