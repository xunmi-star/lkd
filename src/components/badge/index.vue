<template>
  <span
    v-text="text"
    :class="['badge', {'badge-dot': typeof text === 'undefined', 'badge-single': typeof text !== 'undefined' && text.toString().length === 1}]"
  ></span>
</template>

<script>
export default {
  name: "badge",
  props: {
    text: [String, Number]
  }
};
</script>

<style lang="stylus" scoped>
@import '../../style/variable/index.styl'
$badge-bg-color = $warn-color
.badge
  display inline-block
  text-align center
  background-color #fff
  font-size 12px
  height 16px
  line-height 16px
  border-radius 8px
  padding 0 6px
  background-clip padding-box
  vertical-align middle
.badge-single
  padding 0
  width 16px
.badge-dot
  height auto
  padding 5px
</style>
