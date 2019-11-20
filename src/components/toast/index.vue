<template>
  <div class="toast">
    <div class="weui-mask_transparent" v-show="isShowMask && show"></div>
    <transition :name="currentTransition">
      <div class="weui-toast" :style="{width: width}" :class="toastClass" v-show="show">
        <i class="weui-icon-success-no-circle weui-icon_toast" v-show="type !== 'text'"></i>
        <p class="weui-toast__content" v-if="text" :style="style" v-html="text"></p>
        <p class="weui-toast__content" v-else :style="style">
          <slot></slot>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
import SafariFixIssue from "../../mixins/safari-fix";

export default {
  name: "toast",
  mixins: [SafariFixIssue],
  props: {
    value: Boolean,
    time: {
      //时间
      type: Number,
      default: 2000
    },
    type: {
      // 类型
      type: String,
      default: "success"
    },
    transition: String,
    width: {
      // 宽度
      type: String,
      default: "7.6em"
    },
    isShowMask: {
      // 是否显示蒙版
      type: Boolean,
      default: false
    },
    text: String, // 内容
    position: String //位置
  },
  data() {
    return {
      show: false
    };
  },
  created() {
    if (this.value) {
      this.show = true;
    }
  },
  computed: {
    currentTransition() {
      if (this.transition) {
        return this.transition;
      }
      if (this.position === "top") {
        return "slide-from-top";
      }
      if (this.position === "bottom") {
        return "slide-from-bottom";
      }
      return "fade";
    },
    toastClass() {
      return {
        "weui-toast_forbidden": this.type === "warn",
        "weui-toast_cancel": this.type === "cancel",
        "weui-toast_success": this.type === "success",
        "weui-toast_text": this.type === "text",
        "toast-top": this.position === "top",
        "toast-bottom": this.position === "bottom",
        "toast-middle": this.position === "middle"
      };
    },
    style() {
      if (this.type === "text" && this.width === "auto") {
        return { padding: "10px" };
      }
      return {};
    }
  },
  watch: {
    show(val) {
      if (val) {
        this.$emit("input", true);
        this.$emit("on-show");
        this.fixSafariOverflowScrolling("auto");

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.show = false;
          this.$emit("input", false);
          this.$emit("on-hide");
          this.fixSafariOverflowScrolling("touch");
        }, this.time);
      }
    },
    value(val) {
      this.show = val;
    }
  }
};
</script>

<style lang="less">
@import "../../style/weui/icon/weui-icon_font.less";
</style>
<style lang="stylus" scoped>
@import '../../style/transition.styl'
$toast-top = 180px
$toast-z-index = 5001
$toast-position-top-offset = 56px
$toast-position-bottom-offset = 60px
$toast-bg = rgba(17, 17, 17, 0.7)
.weui-mask
  position fixed
  z-index 1000
  top 0
  right 0
  left 0
  bottom 0
  background rgba(0, 0, 0, 0.6)
.weui-mask_transparent
  position fixed
  z-index 1000
  top 0
  right 0
  left 0
  bottom 0
.weui-toast
  position fixed
  z-index $toast-z-index
  width 7.6em
  min-height 7.6em
  top $toast-top
  left 50%
  margin-left -3.8em
  background $toast-bg
  text-align center
  border-radius 5px
  color #FFFFFF
.weui-icon_toast
  margin 22px 0 0
  display block
  &.weui-icon-success-no-circle
    &:before
      color #FFFFFF
      font-size 55px
  &.weui-loading
    margin 30px 0 0
    width 38px
    height 38px
    vertical-align baseline
.weui-toast__content
  margin 0 0 15px
.weui-toast.toast-top
  top $toast-position-top-offset
.weui-toast.toast-bottom
  top auto
  bottom $toast-position-bottom-offset
  transform translateX(-50%)
.weui-toast.toast-middle
  top 50%
  transform translateX(-50%) translateY(-50%)
.slide-from-top-enter, .slide-from-top-leave-active
  opacity 0
  transform translateX(-50%) translateY(-100%) !important
.slide-from-bottom-enter, .slide-from-bottom-leave-active
  opacity 0
  transform translateX(-50%) translateY(100%) !important
.slide-from-top-enter-active, .slide-from-top-leave-active, .slide-from-bottom-enter-active, .slide-from-bottom-leave-active
  transition all 400ms cubic-bezier(0.36, 0.66, 0.04, 1)
.weui-toast
  transform translateX(-50%)
  margin-left 0 !important
.weui-toast.weui-toast_forbidden
  color #F76260
.weui-toast.weui-toast_forbidden .weui-toast__content
  margin-top 10px
.weui-toast.weui-toast_text
  min-height 0
.weui-toast_text .weui-toast__content
  margin 0
  padding-top 10px
  padding-bottom 10px
  border-radius 15px
.weui-toast__content
  // font-size: $toast-content-font-size;
.weui-loading_toast .weui-toast__content
  margin-top 0
.weui-toast_success .weui-icon_toast:before
  content '\EA08'
.weui-toast_cancel .weui-icon_toast:before
  content '\EA0D'
.weui-toast_forbidden .weui-icon_toast.weui-icon-success-no-circle:before
  content '\EA0B'
  color #F76260
</style>
