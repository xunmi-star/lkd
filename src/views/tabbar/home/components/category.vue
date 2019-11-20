<template>
  <div class="category-box">
    <div class="category" v-if="list.length > 0 ">
      <div class="category-item" @click="onClickItem(cat)" v-for="cat in list" :key="cat.title">
        <div class="icon-box">
          <!-- <img :src="require('@/assets/images/' + cat.icon)" class="full-h"> -->
          <img :src="cat.logo" class="full-h">
        </div>
        <div>{{cat.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "category",
  props: {
    list: {
      require: true,
      default: []
    }
  },
  // **
  // **
  methods: {
    onClickItem(cat) {
      console.log("cat", cat)
      // 原来的，组件跳转
      this.$router.push({
        path: `/product/list/${cat.id}`,
        query: {
          id: cat.id,
          title: cat.name
        }
      });

      //跳转信用卡攻略
      // let link = cat.url
      // this.$router.push({
      //   name: "urlView",
      //   query: {
      //     link: link
      //   }
      // })


    }
  }
};
</script>
<style lang="stylus" scoped>
.category-box
  background-color #fff
  height 1rem
.category
  display flex
  width 100%
  height 100%
.category-item
  flex 1
  font-size 14px
  display flex
  flex-direction column
  justify-content center
  .icon-box
    width 100%
    height 0.37rem
    margin-bottom 10px
</style>


