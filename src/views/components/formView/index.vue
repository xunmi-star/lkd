<template>
  <div class="box">
    <!-- 回退按钮 -->
    <div class="back-icon" @click="$router.back()">
      <icon name="arrow-left"></icon>
    </div>
    <!-- 路由切换区域 -->
    <div class="form-area">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "formView",

  // beforeRouteEnter(to, from, next) {
  //   console.log("user user ")
  //   next()
  // },
};
</script>
<style lang="stylus" scoped>
.box
  position relative
  height 100%
  width 100%
  position absolute
  left 0
  bottom 0
  padding-bottom 20%
  .back-icon
    position absolute
    top 10px
    left 10px
    color #fff
    width 20px
    height 20px
    z-index 100
  .form-area
    position absolute
    left 0
    width 100%
    padding-left 0.2rem
    padding-right 0.2rem
</style>
