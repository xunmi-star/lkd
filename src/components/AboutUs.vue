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
          <div class="title-item">关于我们</div>
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

    <div class="aboutOur">

      <h2>关于拉卡贷</h2>
      <p style="text-indent:2em">拉卡贷是基于移动互联网的全流程线上网络借款平台， 主要解决都市年轻白领与蓝领在日常生活中的借款需求，提供2000-10000元信用额度，3期和6期的灵活借款。用户可以根据自己授信额度自主选择借款金额、还款期数。用钱宝采用互联网大数据方式，省去了传统金融服务的繁琐流程及手续，旨在提供一个简单方便、灵活快捷的借款新模式。
</p>
        <br>
      <h4>公司介绍</h4>
      <p style="text-indent:2em">洪才网络科技有限公司成立于2018年，作为国内领先的金融科技公司，通过自主研发以人工智能为核心的新金融技术，助力普惠金融，拓展金融边界，优化金融生态，以期实现“让每个人享受智慧的金融”的美好愿景。凭借清晰的商业模式、出色的研发和管理团队，以及健康稳健的运营，公司获得众多一线投资机构的认可。
</p>
<br>
      <h4>产品特色</h4>
        <span style="text-indent:2em">1.</span>额度高，分期借款，还款无压力1000-30000元“额度高”，3期6期灵活借款；用户可以在范围内自主定义借款金额、还款周期。真正做到按需借款，分期还款再无压力。
<br>
      2.全流程线上完成，极为方便从申请到放款仅4步，到期一键还款，操作简单手机号注册 —— 填写资料授信—— 一键申请 —— 放款 —— 按期数还款全部操作均在手机APP上完成，省时省力。填写资料授信仅需1分钟，且成功授信后，无需每次申请时重复填写资料，真正做到“一键借款”。
<br>
      3.互联网大数据模式，机器自动审核，极速批款用钱宝采用互联网大数据方式，采集互联网大数据并进行数据清洗、建模，形成个人信用评分体系，省去了传统金融服务的繁琐流程及手续，旨在提供一个简单方便、灵活快捷的借款新模式：1分钟授信，一键申请，用钱不求人，按期还款。
<br><br>
      Copyright ©2017-2019 洪才网络科技有限公司
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
@import '../style/variable/index.styl'
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
.aboutOur
  text-align left 
  font-size 16px
</style>
