<template>
  <!-- 银行卡列表 -->
  <div class="pro" @click="onClickCheck">
    <div class="left">
      <div class="left-top">
        <div class="icon-box">
          <icon name="default-img" v-if="isImgError" class="full"></icon>
          <img v-else :src="data.logo" @error="isImgError=true" class="full-h">
        </div>
        <div class="pro-name">{{data.name}}</div>
        <div style="height: 100%;">
          <div class="pro-tag">{{$t("product.populer")}}</div>
        </div>

      </div>
      <div class="left-center">
        <!-- <span class="f1">{{$t("product.amountRange")}}</span>   -->
        <span class="f1">{{this.$props.data.remark}}</span> 
        <span class="f1">{{$t("product.loanCycle")}}:{{data.period }} {{$t("product.day")}}</span>
      </div>
      <div class="left-bottom">
        <span class="f1 pro-num">{{data.quota}}</span>
        <span class="f1">{{$t("product.monthlyRate")}}:{{data.rate}}%</span>
      </div>
    </div>

    <div class="right">
      <button class="pro-btn">{{$t("user.commit")}}</button>
    </div>
    
  </div>
</template>

<script>
import { productLog } from '@/api/product';

export default {
  name: "pro",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    // console.log("item", this.$props.data)
    return {
      isImgError: false,
    };
  },

  methods: {
    onClickCheck() {

      let data = this.$props.data
      console.log("跳转链接", data.url)
      // window.open(data.url)
      plus.runtime.openURL(data.url)

      // productLog({ productId: data.id })
      // this.$router.push({
      //   name: "urlView",
      //   query: {
      //     title: data.name,
      //     link: data.url
      //   }
      // });


    },
  }
};
</script>
<style lang="stylus" scoped>
.pro
  border-radius 0.1rem
  background-color #fff
  padding 0.1rem
  display flex
.left
  flex 1
  text-align left
  padding-right 10px
.right
  display flex
  align-items center
.icon-box
  display inline-block
  width 28px
  height 28px
  margin-right 0.1rem
  border-radius 14px
  overflow hidden
  box-shadow 0px 1px 4px -1px #aaa
  text-align center
  svg
    width 100%
    height 100%
.left-top, .left-center, .left-bottom
  font-size 12px
  display flex
  align-items center
  color #676767
  line-height 1.5
.left-top
  display flex
  align-items center
  height 28px
.left-center
  padding-top 5px
.f1
  flex 1
.pro-name
  font-size 14px
  margin-right 3px
  color #333
  vertical-align middle
.pro-tag
  border 1px solid #f0a038
  color #f0a038
  font-size 10px
  transform-origin center
  position relative
  padding 2px 5px
  border-radius 4px
  vertical-align middle
  box-sizing content-box
  top 50%
  transform translateY(-50%) scale(0.7)
.pro-num
  font-size 14px
  color #FB6C28
.pro-btn
  background-color #FB6C28
  color #ffffff
  padding 5px 10px
  border-radius 5px
  border 0 none
</style>
