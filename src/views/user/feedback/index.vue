<template>
  <div class="box">
    <textarea cols="30" rows="10" v-model="text" :placeholder="$t('user.feedbackPlacehold') + '...'"></textarea>
    <button class="con" style="width: 96%" @click.native="onClickFeedback">{{$t("user.commit")}}</button>  
  </div>
</template>

<script>
import { feedback } from "@/api/user"
export default {
  name: "feedback",
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onClickFeedback() {
      let text = this.text.trim()
      if (!text) {
        this.$toast.show(this.$t('user.feedbackPlacehold'))
        return
      }
      feedback({ context: text }).then((data) => {
        this.$toast.show(data.msg)
        setTimeout(() => {

          this.text = ""
          this.$router.back()
        }, 1000);

      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.box
  background-color #EEEEEE
  height 100%
  width 100%
  padding 8px
  textarea
    background-color #FFFFFF
    font-size 12px
    border 0 none
    width 100%
    border-radius 10px
    height 2rem
    padding 10px
    box-sizing border-box
    margin-bottom 1rem
.con
  border none
  position relative
  display block;
  margin-left: auto
  margin-right auto
  margin-top -35px
  padding-left 14px
  padding-right 14px
  -webkit-box-sizing border-box
  box-sizing border-box
  font-size 18px
  text-align center
  text-decoration none
  color #ffffff
  line-height 2.33333333
  border-radius 5px
  -webkit-tap-highlight-color rgba(0, 0, 0, 0)
  overflow: hidden
  background-color #F8AD8C
</style>
