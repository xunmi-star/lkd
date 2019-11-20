<template>
  <view-box>
    <rg-header ref="header"></rg-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </view-box>
</template>

<script>
import RgHeader from "@/components/header";
import ViewBox from "@/components/view-box";
export default {
  name: "navView",
  components: {
    ViewBox,
    RgHeader
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.setHeader(to.query)
    })
  },
  beforeRouteUpdate(to, form, next) {
    this.setHeader(to.query)
    next()
  },
  methods: {
    setHeader({ title = "", link }) {
      let header = this.$refs.header
      header.title = title
      if (link) {
        header.isShowRefresh = true
      } else {
        header.isShowRefresh = false
      }
    }
  }
};
</script>
