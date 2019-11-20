<template>
  <div class="box">
    <iframe :src="this.link" frameborder="0" ref="iframe" @load="onIframeLoaded" ></iframe>
  </div>
</template>

<script>
import bus from "@/libs/bus";
export default {
  name: "urlView",
  data() {
    return {
      link: this.$route.query.link
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.link = vm.$route.query.link
      vm.$loading.show()
    })
  },
  
  mounted() {
    console.log("调用链接",this.link)
    this.refresh = () => {

      this.link = `${this.link}?name=${new Date().getTime()}`;
      this.$loading.show()
    };
    bus.$on("clickHeaderRefresh", this.refresh); // 添加监听
    // bus.$emit("toggleHeaderRefresh", true);
  },
  methods: {
    onIframeLoaded() {
      this.$loading.hide()
    }
  },
  beforeDestroy() {
    bus.$off("clickHeaderRefresh", this.refresh); // 清除订阅
    // bus.$emit("toggleHeaderRefresh", false);
  }
};
</script>
<style lang="stylus" scoped>
.box
  background-color #fff
  height 100%
  iframe
    width 100%
    height 100%
</style>
