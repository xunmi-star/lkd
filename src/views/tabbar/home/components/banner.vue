<template>
  <div class="swiper-box">
    <div class="default-box">
      <div class="dib">
        <icon name="default-img" class="icon"></icon>
        <div>abcsejifne ewjf</div>
      </div>
    </div>
    <Swiper v-if="list.length > 0" class="swiper">
      <Slide v-for="(item,index) in list" :key="index" @click.native="onClickItem(item)">
        <div class="banner-item">
          <img :src="item.imgUrl" alt>
        </div>
      </Slide>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, Slide } from "vue-swiper-component";
import { bannerLog } from '@/api/home';
export default {
  name: "banner",
  components: {
    Swiper,
    Slide
  },
  props: {
    list: {
      require: true,
      default: []
    }
  },
  methods: {
    onClickItem(item) {
      // bannerLog({ bannerId: item.id }).then((data) => {
      //   console.log(data)
      //   this.$router.push({
      //     name: "urlView",
      //     query: {
      //       title: item.title,
      //       link: item.link
      //     }
      //   });
      // }, (e) => {
      //   console.log(e)
      // })
      plus.runtime.openURL(item.link)
    }
  }
};
</script>
<style lang="stylus" scoped>
$height = (300 / 750) * 100vw
.swiper-box
  height $height
  position relative
  .default-box
    position absolute
    left 0
    top 0
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    color #999
    .icon
      width 40px
      height 40px
  .swiper
    position relative
    z-index 10
.banner-item
  height $height
  overflow hidden
  img
    width 100%
</style>


