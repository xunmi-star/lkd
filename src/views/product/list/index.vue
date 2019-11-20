<template>
  <div class="box">
    <Scroll :pullUpLoad="true" @pullingUp="pullingUp" ref="scroll">
      <div class="pro-box">
        <div class="pro-wrapper" v-for="(product, index) in products" :key="index">
          <product-item :data="product"></product-item>
        </div>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Scroll from '@/components/scroll';
// import { mapState, mapActions } from "vuex";
import { ProductItem } from "@/components/product";
import { getProList } from "@/api/product";
export default {
  name: "products",
  components: { ProductItem, Scroll },
  data() {
    return {
      curPage: 1,
      categoryId: this.$route.query.id,
      products: [],
      totalPage: 0,
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.reset()
      vm.getList(1)
    })
  },
  
  methods: {
    getList(page) {

      return new Promise((resolve, reject) => {
        getProList({
          pageNum: page + "",
          // typeId: this.categoryId,       //用这个的话会使得3个卡片的id都是一致的
          typeId: this.$route.query.id
        }).then(
          data => {
            console.log("产品列表数据", data);
            this.curPage = page * 1
            this.totalPage = data.pageTotal * 1
            this.initProList(data.list);   
            resolve()
          },
          e => {
            reject()
            console.log(e);
          }
        );
        
      })
      // this.$router.go(0)
    },
    reset() {
      this.products = []
      this.$refs.scroll.forceUpdate()
    },
    initProList(list) {
      let l = list.map(item => {
        return {
          id: item.productId,
          logo: item.logo,
          name: item.productName, // 产品名称
          quota: item.quota, // 配额,
          classification: item.classification, // 分类
          remark: item.remark, // 备注
          rate: item.rate, // 比率
          period: item.period,// 周期,
          url: item.url,   // 跳转显示的连接
        };
      });
      this.products = this.products.concat(l);
    },
    // 下拉刷新回调
    // pullingDown() {

    // },
    //上拉加载回调
    pullingUp() {
      if (this.totalPage <= this.curPage) return
      this.getList(this.curPage + 1).then(() => {
        this.$refs.scroll.forceUpdate()
      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  height 100%
.pro-box
  overflow hidden
  height 100%
  padding 0.04rem 0
.pro-wrapper
  padding 0.04rem 0.08rem
</style>
