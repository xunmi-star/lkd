<template>
  <div class="home">
    <Scroll :pullUpLoad="true" :pullDownRefresh="true" @pullingUp="pullingUp" @pullingDown="pullingDown" ref="scroll">
      <div>
        <banner :list="bannerList"></banner>
        <category :list="categories"></category>
        <product-list :list="products"></product-list>
      </div>
    </Scroll>
  </div>
</template>

<script>
import { getHomeData } from "@/api/home";
import { mapState } from "vuex";
import { ProductList } from "@/components/product";
import Banner from "./components/banner.vue";
import Category from "./components/category.vue";
import Scroll from '@/components/scroll';
import { getProList } from "@/api/product";
import { Promise } from 'q';


export default {
  name: "home",
  components: {
    Scroll,
    ProductList,
    Banner,
    Category
  },

  created() {
   
    

    getHomeData({
      pageNum: 1
    }).then(
      data => {
        console.log("主页数据", data);
        this.initBannerList(data.bannerList);
        this.initCategory(data.typeList);
      },
      e => {
        console.log(e);
      }
    );
    this.getList(1)
  },

  data() {
    return {
      categories: [],
      bannerList: [], // 轮播图列表
      products: [],
      curPage: 1,
      totalPage: 0,
    };
  },
  mounted() { },
  computed: {
    ...mapState({
      direction: state => state.direction
    })
  },
  methods: {

    pullingUp() {
      console.log("totalPage", this.totalPage)
      console.log("curPage", this.curPage)
      if (this.totalPage <= this.curPage) return
      this.getList(this.curPage + 1).then(() => {
        this.$refs.scroll.forceUpdate()
      })
    },
    pullingDown() {

      getHomeData({
        pageNum: 1
      }).then(data => {
        this.categories = []
        this.bannerList = []
        this.products = []
        this.curPage = 1
        this.totalPage = 0
        console.log("主页数据", data);
        this.initBannerList(data.bannerList);
        this.initCategory(data.typeList);
        this.getList(1).then(() => {
          this.$refs.scroll.forceUpdate()
        }, () => {
          this.$refs.scroll.forceUpdate()
        })
      },
        e => {
          console.log(e);
        }
      )

    },
    initBannerList(list) {
      if (!Array.isArray(list)) return;
      this.bannerList = list.map(item => {
        return {
          id: item.bannerId,
          imgUrl: item.fileUrl,
          link: item.url,
          title: item.title,
        };
      });
    },
    initCategory(list) {
      
      if (!Array.isArray(list)) return;
      let iconMap = {
        1: "icon-elec.png",
        2: "icon-new.png",
        3: "icon-tech.png",
      };
      console.log("卡片",list)
      this.categories = list.map(item => {
        return {
          icon: iconMap[item.typeId] || iconMap[1],   
          logo: item.typeLogo,      //新添的一行，用于把logo传给category.vue组件
          id: item.typeId,
          name: item.typeName,
          url:  item.typeUrl,        //新添的一行，跳转地址
        };
      });
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
      // console.log(this.products);
    },
    getList(page) {
      return new Promise((resolve, reject) => {
        getProList({
          pageNum: page + "",
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

    },
  },
  beforeDestroy() { }

};
</script>
<style scoped >
.home {
  height: 100%;
  width: 100%;
}

.pro-box {
  padding: 0.04rem 0;
}
.pro-wrapper {
  padding: 0.04rem 0.08rem;
}
</style>
