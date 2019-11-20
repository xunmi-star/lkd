<template>
  <a href="javascript:void(0);" class="tabbar-item" :class="{'active': isActive, 'vux-tabbar-simple': simple}" @click="onItemClick(true)">
    <div class="tabbar-icon" :class="[iconClass || $parent.iconClass, {'vux-reddot': showDot}]" v-if="!simple">
      <slot name="icon" v-if="!simple && !(hasActiveIcon && isActive)"></slot>
      <slot name="icon-active" v-if="!simple && hasActiveIcon && isActive"></slot>
      <sup v-if="badge">
        <badge :text="badge"></badge>
      </sup>
    </div>
    <p class="tabbar-label">
      <slot name="label"></slot>
    </p>
  </a>
</template>

<script>
import { childMixin } from "../../mixins/multi-items";
import Badge from "../badge/index.vue";

export default {
  name: "tabbar-item",
  components: {
    Badge
  },
  props: {
    showDot: {
      // 是否显示红点
      type: Boolean,
      default: false
    },
    badge: String, //
    link: [String, Object], // 连接位置

    iconClass: String // 图标类名
  },
  mounted() {
    if (!this.$slots.icon) {
      this.simple = true;
    }
    if (this.$slots["icon-active"]) {
      this.hasActiveIcon = true;
    }
  },
  mixins: [childMixin],

  computed: {
    isActive() {
      return this.$parent.index === this.currentIndex;
    }
  },
  data() {
    return {
      simple: false,
      hasActiveIcon: false
    };
  }
};
</script>
<style scoped lang="stylus">
@import '../../style/mixin/index.styl'
$tabbar-height = 48px
$tabbar-text-active-color = #FB6C28
$tabbar-text-color = #999
$tabbar-icon-width = $tabbar-height * 0.5
$tabbar-icon-height = $tabbar-icon-width
$tabbar-lable-height = $tabbar-height * 0.34
.tabbar-item
  setTapColor()
  padding-top ($tabbar-height - $tabbar-icon-height - $tabbar-lable-height) * 0.5
  display block
  flex 1
  font-size 0
  color $tabbar-text-color
  text-align center
  &.active
    .tabbar-icon, .tabbar-icon > i, .tabbar-label
      color $tabbar-text-active-color
.tabbar-icon
  display inline-block
  width $tabbar-icon-width
  height $tabbar-icon-height
  & > i
    font-size 24px
    color $tabbar-text-color
  img
    width 100%
    height 100%
.tabbar-label
  text-align center
  color $tabbar-text-color
  font-size 10px
  line-height $tabbar-lable-height
</style>