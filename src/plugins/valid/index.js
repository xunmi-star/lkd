export const valid = {
  pwd ( str ) {
    return {
      valid: str.length >= 6,
      msg: "密码长度不正确"
    };
  }
}

export default {
  install ( Vue ) {
    Vue.prototype.$valid = valid
  },
}
