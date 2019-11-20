/** 引入需要分离打包的文件 */
export const _import_componets = pathName => import( /* webpackChunkName: "components/[request]/index" */ `_c/${pathName}`)
// import( /* webpackChunkName: "components/test/index" */ `_c/test`).then(module => {
//   console.log(module.default);
// }).catch(err => {
//   console.log(err);
// })
