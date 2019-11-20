<template>
  <!-- <Scroll :pullUpLoad="true" @pullingUp="pullingUp" ref="scroll"> -->
  <div class="pro-box">
    <div class="pro-wrapper" v-for="product in list" :key="product.id">
      <product-item :data="product"></product-item>
    </div>
  </div>
  <!-- </Scroll> -->
</template>

<script>
import ProductItem from "./productItem";
// import Scroll from '@/components/scroll';
// import { getProList } from "@/api/product";
export default {
  name: "productList",
  components: {
    // Scroll,
    ProductItem
  },
  props: {
    list: {
      required: true,
    }
  },
  data() {
    let data = this.$props.data;
    console.log(data);
    return {};
  },
  methods: {

    pullingUp() {
      if (this.totalPage === this.curPage) return
      this.getList(this.curPage + 1).then(() => {
        this.$refs.scroll.forceUpdate()
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.pro-box
  overflow hidden
  // height 100%
  padding 0.04rem 0
.pro-wrapper
  padding 0.04rem 0.08rem
</style>
