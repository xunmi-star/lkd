<template>
  <div class="confirm">
    <x-dialog
      v-model="showValue"
      :dialog-class="theme === 'android' ? 'weui-dialog weui-skin_android' : 'weui-dialog'"
      :mask-transition="maskTransition"
      :dialog-transition="theme === 'android' ? 'fade' : dialogTransition"
      :hide-on-blur="hideOnBlur"
      :mask-z-index="maskZIndex"
      @on-hide="$emit('on-hide')">
      <div class="weui-dialog__hd" v-if="!!title" :class="{'with-no-content': !showContent}">
        <strong class="weui-dialog__title">{{ title }}</strong>
      </div>
      <template v-if="showContent">
        <div class="weui-dialog__bd" v-if="!showInput">
          <slot><div v-html="content"></div></slot>
        </div>
        <div v-else class="prompt">
          <input
            class="prompt-msgbox"
            v-bind="getInputAttrs()"
            v-model="msg"
            :placeholder="placeholder"
            @touchend="setInputFocus"
            ref="input"/>
        </div>
      </template>
      <div class="weui-dialog__ft">
        <a v-if="showCancelButton" href="javascript:;" class="weui-dialog__btn weui-dialog__btn_default" @click="_onCancel">{{cancelText || $t('cancel_text')}}</a>
        <a v-if="showConfirmButton" href="javascript:;" class="weui-dialog__btn" :class="`weui-dialog__btn_${confirmType}`" @click="_onConfirm">{{confirmText || $t('confirm_text')}}</a>
      </div>
    </x-dialog>
  </div>
</template>

<i18n>
confirm_text:
  en: confirm
  zh-CN: 确定
cancel_text:
  en: cancel
  zh-CN: 取消
</i18n>

<script>
import XDialog from '../x-dialog'
export default {
  name: 'confirm',
  components: {
    XDialog
  },
  props: {
    value: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    theme: {
      type: String,
      default: 'ios'
    },
    hideOnBlur: {
      type: Boolean,
      default: false
    },
    title: String,
    confirmText: String,
    cancelText: String,
    maskTransition: {
      type: String,
      default: 'fade'
    },
    maskZIndex: [Number, String],
    dialogTransition: {
      type: String,
      default: 'dialog'
    },
    content: String,
    closeOnConfirm: {
      type: Boolean,
      default: true
    },
    inputAttrs: Object,
    showContent: {
      type: Boolean,
      default: true
    },
    confirmType: {
      type: String,
      default: 'primary'
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showConfirmButton: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.showValue = this.show
    if (this.value) {
      this.showValue = this.value
    }
  },
  watch: {
    value (val) {
      this.showValue = val
    },
    showValue (val) {
      this.$emit('input', val)
      if (val) {
        if (this.showInput) {
          this.msg = ''
          setTimeout(() => {
            if (this.$refs.input) {
              this.setInputFocus()
            }
          }, 300)
        }
        this.$emit('on-show') // emit just after msg is cleared
      }
    }
  },
  data () {
    return {
      msg: '',
      showValue: false
    }
  },
  methods: {
    getInputAttrs () {
      return this.inputAttrs || {
        type: 'text'
      }
    },
    setInputValue (val) {
      this.msg = val
    },
    setInputFocus (evt) {
      if (evt) {
        evt.preventDefault()
      }
      this.$refs.input.focus()
    },
    _onConfirm () {
      if (!this.showValue) {
        return
      }
      if (this.closeOnConfirm) {
        this.showValue = false
      }
      this.$emit('on-confirm', this.msg)
    },
    _onCancel () {
      if (!this.showValue) {
        return
      }
      this.showValue = false
      this.$emit('on-cancel')
    }
  }
}
</script>
<style lang="less">
	@import '../../style/weui/widget/weui-tips/weui-mask';
	@import '../../style/weui/widget/weui-tips/weui-dialog';

</style>
<style lang="stylus">
@import '../../style/transition.styl';

.prompt {
  padding-bottom: 1.6em;
}

.prompt-msgbox {
  width: 80%;
  border: 1px solid #dedede;
  border-radius: 5px;
  padding: 4px 5px;
  appearance: none;
  outline: none;
  font-size: 16px;
}
</style>
