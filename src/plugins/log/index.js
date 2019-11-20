import debug from "debug";
//Vue.prototype.$log = debug("app");

// const appDebug = debug("app");


export default {
  install(Vue) {
    Vue.prototype.$log = debug
    //Vue.log = appDebug
  },
  //$log: appDebug
}

//export const $log = appDebugg