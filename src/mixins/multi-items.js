//import {go} from '../libs/router'

const parentMixin = {
  props: {
    value: { // 传入的子组件的下标
      type: Number,
      default: 0
    },

  },
  data() {
    return {
      index: -1, //
      currentIndex: this.index, // 当前的子组件下标
      number: this.$children.length, // 子组件的个数
    }
  },
  mounted() {
    if (this.value >= 0) {
      this.currentIndex = this.value
    }
    this.updateIndex()
  },
  methods: {
    updateIndex() {
      if (!this.$children || !this.$children.length) return
      this.number = this.$children.length
      let children = this.$children
      for (let i = 0; i < children.length; i++) {
        children[i].currentIndex = i
        if (children[i].currentSelected) {
          this.index = i
        }
      }
    }
  },

  watch: {
    currentIndex(val, oldVal) {
      oldVal > -1 && this.$children[oldVal] && (this.$children[oldVal].currentSelected = false)
      val > -1 && this.$children[val] && (this.$children[val].currentSelected = true)
      this.$emit('input', val)
      this.$emit('on-index-change', val, oldVal)
    },
    index(val) {
      this.currentIndex = val
    },
    value(val) {
      this.index = val
    }
  },

}

const childMixin = {
  props: {
    selected: { // 是否选中
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: -1,
      currentSelected: this.selected
    }
  },
  mounted() {
    this.$parent.updateIndex()
  },

  methods: {
    onItemClick(hasLink) {
      if (this.$parent.preventDefault) {
        this.$parent.$emit('on-before-index-change', this.currentIndex)
        return
      }
      if (typeof this.disabled === 'undefined' || this.disabled === false) {
        this.currentSelected = true
        this.$parent.currentIndex = this.currentIndex
        this.$nextTick(() => {
          this.$emit('on-item-click', this.currentIndex)
        })
      }
      if (hasLink === true) {
        this.$router.push(this.link)
        //go(this.link, this.$router)
      }
    }
  },
  watch: {
    currentSelected(val) {
      if (val) {
        this.$parent.index = this.currentIndex
      }
    },
    selected(val) {
      this.currentSelected = val
    }
  },
  beforeDestroy() {
    const $parent = this.$parent
    this.$nextTick(() => {
      $parent.updateIndex()
    })
  },

}

export {
  parentMixin,
  childMixin
}
