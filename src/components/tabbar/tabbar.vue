<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
import { parentMixin } from "../../mixins/multi-items";

export default {
  name: "tabbar",
  mixins: [parentMixin],
  props: {
    iconClass: String
  },

  // data() {
  //   return {
  //     height: "48px"
  //   }
  // },
  mounted() {
    if (process.env.NODE_ENV === "development") {
      this.$nextTick(() => {
        const $el = this.$el;
        const position = window.getComputedStyle($el).position;
        if (position === "absolute") {
          if (document.documentElement.offsetHeight !== window.innerHeight) {
            console.warn(
              "tabbar 定位默认为 absolute，如果你没有使用 100% 布局(view-box)，需要手动设置 style position 为 fixed"
            );
          }
        }
      });
    }
  },


};
</script>

<style lang="stylus" scoped>
/* @import "../../style/mixin/index.styl" */
$tabbar-height = 48px
$tabbar-bg = #fff
$tabbar-border-color = #c0bfc4
.tabbar
  box-sizing border-box
  display flex
  bottom 0
  background-color $tabbar-bg
  height $tabbar-height
  overflow hidden
  &:before
    setTopLine($tabbar-border-color)
</style>
