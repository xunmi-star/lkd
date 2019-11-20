<template>
  <view-box>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar ref="tabbar">
      <tabbar-item :link="{name: item.name }" v-for="item in tabbarList" :key="item.name">
        <icon slot="icon" :name="item.icon" style="height: 100%; width: 100%"></icon>
        <span slot="label">{{ $t(`tabbar.${item.name}`) }}</span>
      </tabbar-item>
    </tabbar>
  </view-box>
</template>

<script>
import { Tabbar, TabbarItem } from "@/components/tabbar";
import ViewBox from "@/components/view-box";
import { children } from '@/router/modules/tabbar';
export default {
  name: "tabbar-view",
  components: {
    Tabbar,
    TabbarItem,
    ViewBox
  },
  beforeRouteEnter(to, from, next) {
    next(vm => vm.setTabbarIndex(to.name));
  },
  beforeRouteUpdate(to, from, next) {
    this.setTabbarIndex(to.name)
    next()
  },
  data() {
    return { tabbarList: children.map(item => ({ name: item.name, icon: `tabbar-${item.name}` })) }
  },
  methods: {
    /** 设置tabbar当前选中的index */
    setTabbarIndex(name) {
      let index = this.tabbarList.indexOf(this.tabbarList.find(item => item.name === name))
      if (index >= 0) this.$refs.tabbar.index = index
    }
  }

};
</script>
