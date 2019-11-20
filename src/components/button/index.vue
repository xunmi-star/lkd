<template>
  <button
    :style="buttonStyle"
    class="rg-btn"
    :class="classes"
    :disabled="disabled"
    :type="actionType"
    @click="onClick"
  >
    <i class="weui-loading" v-if="showLoading"></i>
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
import { go } from "../../libs/router";

export default {
  name: "btn",
  props: {
    type: {
      default: "default"
    },
    disabled: Boolean,
    mini: Boolean,
    plain: Boolean,
    text: String,
    actionType: String,
    showLoading: Boolean,
    link: [String, Object],
    gradients: {
      type: Array,
      validator: function(val) {
        return val.length === 2;
      }
    }
  },
  methods: {
    onClick() {
      !this.disabled && go(this.link, this.$router);
    }
  },
  computed: {
    noBorder() {
      return Array.isArray(this.gradients);
    },
    buttonStyle() {
      if (this.gradients) {
        return {
          background: `linear-gradient(90deg, ${this.gradients[0]}, ${
            this.gradients[1]
          })`,
          color: "#FFFFFF"
        };
      }
      return {};
    },
    classes() {
      return [
        {
          "rg-btn_disabled": !this.plain && this.disabled,
          "rg-btn_plain-disabled": this.plain && this.disabled,
          "rg-btn_mini": this.mini,
          "no-border": this.noBorder
        },
        !this.plain ? `rg-btn_${this.type}` : "",
        this.plain ? `rg-btn_plain-${this.type}` : "",
        this.showLoading ? `rg-btn_loading` : ""
      ];
    }
  }
};
</script>

<style lang="less">
// @import "../../style/weui/widget/weui-button/weui-button.less";
// @import "../../style/weui/widget/weui-loading/weui-loading.less";
button.rg-btn,
input.rg-btn {
  width: 100%;
  border-width: 0;
  outline: 0;
  -webkit-appearance: none;
}
.rg-btn {
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  line-height: 2.33333333;
  border-radius: 5px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow: hidden;
}
.rg-btn_default {
  color: #000000;
  background-color: #f8f8f8;
}
.rg-btn.no-border:after {
  display: none;
}

.rg-btn:after {
  content: " ";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  // border: 1px solid rgba(0, 0, 0, 0.2);
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  box-sizing: border-box;
  border-radius: 10px;
}
.rg-btn_primary {
  background-image: linear-gradient(#662aba, #4f6ed0);
  box-shadow: 0 2px 7px -1px #4b79d4;
}
</style>
