<template>
  <div class="header">
    <div class="header-inner">
      <div class="header-left">
        <slot name="overwrite-left">
          <transition :name="transition">
            <a class="header-back" v-show="_leftOptions.showBack">
              <icon name="arrow-left" @click.native="onClickBack" v-show="_leftOptions.showBack" style="width: 20px; height: 20px"></icon>

            </a>
          </transition>
        </slot>
        <slot name="left"></slot>
      </div>

      <div class="header-title" @click="$emit('on-click-title')" v-if="!shouldOverWriteTitle">
        <slot>
          <div class="title-item">{{title}}</div>
        </slot>
      </div>
      <div class="header-title-area" v-if="shouldOverWriteTitle">
        <slot name="overwrite-title"></slot>
      </div>

      <div class="header-right">
        <icon v-if="isShowRefresh" name="refresh" style="width: 24px; height: 24px; margin-top: 10px" @click.native="onClickRefresh"></icon>
        <slot name="right"></slot>
      </div>
    </div>
  </div>
</template>


<script>
import objectAssign from "object-assign";
import bus from "@/libs/bus";
export default {
  name: "rg-header",
  props: {
    leftOptions: Object,
    // title: String,
    transition: String,
    rightOptions: {
      type: Object,
      default() {
        return {
          showMore: false
        };
      }
    }
  },
  beforeMount() {
    // bus.$on("toggleHeaderRefresh", (value) => {
    //   this.isShowRefresh = value;
    // }); // 刷新按钮是否显示的注册
    // if (this.$slots["overwrite-title"]) {
    //   this.shouldOverWriteTitle = true;
    // }
    // this.title1 = this.title;
  },
  data() {
    return {
      isShowRefresh: false,
      shouldOverWriteTitle: false,
      title: ""
    }
  },
  computed: {
    _leftOptions() {
      return objectAssign(
        {
          showBack: true,
          preventGoBack: false
        },
        this.leftOptions || {}
      );
    }
  },
  methods: {
    onClickBack() {
      if (this._leftOptions.preventGoBack) {
        this.$emit("on-click-back");
      } else {
        this.$router.go(-1);
        //					this.$router ? this.$router.back() : window.history.back()
      }
    },
    onClickRefresh() {
      bus.$emit("clickHeaderRefresh");
    }
  },
  beforeDestroy() {
    bus.$off("toggleHeaderRefresh");
  }
};
</script>

<style lang="stylus" scoped>
@import '../../style/variable/index.styl'
$header-background-color = #FFFFFF
$header-title-color = #4C4C4C // 标题颜色
$header-text-color = #fff // 文字颜色
$header-arrow-color = #4C4C4C // 箭头颜色
$header-height = 44px // 标题高度
$header-left-right-width = 72px // 左右的宽度
.header
  padding 0 $gap-default
  background-color $header-background-color
  height $header-height
.header-inner
  padding 0 $header-left-right-width
  height 100%
  position relative
  span
    display inline-block
.header-title-area, .header-title
  height $header-height
  width auto
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
.header-title
  position relative
  line-height $header-height
  text-align center
  font-size 18px
  font-weight 400
  color $header-title-color
  .title-item
    position absolute
    width 100%
    height 100%
    left 0
    top 0
.header-left, .header-right
  position absolute
  width $header-left-right-width
  height 100%
  top 0
  display block
  font-size 14px
  color $header-text-color
  a, button
    display inline-block
    color $header-text-color
    &:active
      opacity 0.5
.header-left
  left 0
  text-align left
  $back-height = 20px
  $arrow-width = 12px
  $arrow-height = $arrow-width
  .header-back
    position relative
    height $back-height
    top ($header-height - $back-height) * 0.5
    line-height $back-height
    .left-arrow
      height 100%
      padding-left $arrow-width
      &:before
        content ''
        position absolute
        width $arrow-width
        height $arrow-height
        border-style solid
        border-color $header-arrow-color
        border-width 1px 0 0 1px
        transform rotate(315deg)
        top 8px
        left 2px
.header-right
  text-align right
  right 0
  $header-more-height = 30px
  .header-more
    position relative
    top ($header-height - $header-more-height) * 0.5
    height $header-more-height
    line-height $header-more-height
    &:after
      content '\2022\0020\2022\0020\2022\0020'
      font-size 16px
.svg-icon
  color #4C4C4C
// /////////////////////////////////////////////////
$animation-duration = 0.38s
$animation-x = 100px
.slide-fade-right-enter-active
  animation fadeInRight $animation-duration
.slide-fade-right-leave-active
  animation fadeOutRight $animation-duration
.slide-fade-left-enter-active
  animation fadeInLeft $animation-duration
.slide-fade-left-leave-active
  animation fadeOutLeft $animation-duration
@keyframes fadeInRight
  0%
    opacity 0
    transform translateX($animation-x)
  100%
    opacity 1
    transform translateX(0)
@keyframes fadeOutRight
  0%
    opacity 1
    transform translateX(0)
  100%
    opacity 0
    transform translateX((-($animation-x)))
@keyframes fadeInLeft
  0%
    opacity 0
    transform translateX((-($animation-x)))
  100%
    opacity 1
    transform translateX(0)
@keyframes fadeOutLeft
  0%
    opacity 1
    transform translateX(0)
  100%
    opacity 0
    transform translateX($animation-x)
</style>
