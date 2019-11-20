import objectAssign from 'object-assign'
import LoadingComponent from '../../components/loading/index.vue'
import {
  mergeOptions
} from '../../libs/plugin_helper'

let $vm
let watcher
let delayTime = null

let pluginOptions = null


export const loading = {
  show(options = {}) {
    // destroy watcher
    watcher && watcher()
    if (typeof options === 'string') {
      mergeOptions($vm, objectAssign({}, pluginOptions, {
        text: options
      }))
    } else if (typeof options === 'object') {
      mergeOptions($vm, objectAssign({}, pluginOptions, options))
    }
    if (typeof options === 'object' && options.onShow || options.onHide) {
      watcher = $vm.$watch('show', (val) => {
        val && options.onShow && options.onShow($vm)
        val === false && options.onHide && options.onHide($vm)
      })
    }
    delayTime && clearTimeout(delayTime)

    delayTime = setTimeout(() => {
      $vm.show = true
    }, options.delay || 0)
  },
  hide() {
    if (delayTime) {
      clearTimeout(delayTime)
      delayTime = null
    }
    $vm.show = false
  },
  isVisible() {
    return $vm.show
  }
}
const plugin = {
  install(vue, options) {

    const Loading = vue.extend(LoadingComponent)
    pluginOptions = options
    if (!$vm) {
      $vm = new Loading({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    vue.prototype.$loading = loading

  }
}

export default plugin
export const install = plugin.install
