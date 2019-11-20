import { getUrl } from "@/api/home"

const state = {
  lang: localStorage.getItem( "lang" ) || "cn",
  aboutUrl: ""
}
const mutations = {
  SET_LANG: ( state, lang ) => {
    state.lang = lang
  },
  SET_ABOUT_URL: ( state, url ) => {
    state.aboutUrl = url
  },
}

const actions = {
  getUrl ( { state, commit } ) {
    return new Promise( ( resolve, reject ) => {
      if ( state.aboutUrl ) resolve( { aboutUrl: state.aboutUrl } )
      getUrl( ).then( data => {
        commit( "SET_ABOUT_URL", data.aboutUrl )
        resolve( data )
      }, reject )
    } )
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
