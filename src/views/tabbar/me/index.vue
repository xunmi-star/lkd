<template>
  <div class="me">
    <div class="top">
      <h3 class="h3">我的</h3>
      <div class="avatar-box">
        <div class="avatar" @click="onClickAvatar">
          <img :src="require('@/assets/images/avatar_default.png')" alt>
        </div>
        <div class="text">{{userName || $t('user.login')}}</div>
      </div>
    </div>
    <div class="bottom">
      <div class="cell-group">
        <cell is-link @click.native="item.onClick(item)" v-for="(item,index ) in cellList" :key="index">
          <img slot="icon" :src="require('@/assets/images/' + item.img )" class="icon-img" alt>
          <span slot="title">{{item.title}}</span>
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "me",

  data() {
    return {
      cellList: [
        {
          title: this.$t('tabbar.aboutUs'),
          img: "icon-yonghu.png",
          onClick: this.onClickAboutUs
        }, {
          title: this.$t('tabbar.changePwd'),
          img: "icon-sou.png",
          onClick: this.onClickUpdatePwd
        }, {
          // title: this.$t('tabbar.feedback'),
          title: this.$t('意见反馈'),
          img: "icon-file.png",
          onClick: this.onClickFeedback
        }, {
          // title: this.$t('user.logout'),
          title: "退出登录",
          img: "icon-person.png",
          onClick: this.onClickLogout
        },

      ]
    };
  },
  computed: {
    ...mapState({ userName: store => store.user.name })
  },
  methods: {
    ...mapActions({ logout: "user/logout", getUrl: 'app/getUrl' }),
    // 点击头像
    onClickAvatar() {
      if (!this.$store.state.user.token) {
        this.$router.push({ name: "login" })
      }
    },
    //点击退出登录
    onClickLogout() {
      this.logout().then(() => {
        this.$router.push({ name: "login" })
      })
    },
    onClickUpdatePwd(item) {
      this.$router.push({
        name: "updatePwd",
        query: {
          title: item.title
        }
      })
    },
    onClickFeedback(item) {
      this.$router.push({
        name: "feedback",
        query: {
          title: item.title
        }
      })
    },
    // 点击关于我们
    onClickAboutUs(item) {
      this.getUrl().then(({ aboutUrl }) => {
        // this.$router.push({
        //   name: "urlView",
        //   query: {
        //     title: item.title,
        //     link: aboutUrl
        //   }
        // })

        this.$router.push({name:"aboutUs"})

      })
    }
  }
};
</script>
<style lang="stylus" scoped>
.top
  height (250 / 750 * 100)vw
  background-color #FB6C28
  h3
    color:#FFFFFF
.avatar-box
  display flex
  left 0.36rem
  top 30%
  .avatar
    width 60px
    height 60px
    border-radius 30px
    overflow hidden
    margin 20px 
    img 
      width 100%
      height 100%
  .text
    font-size 14px
    color #FFFFFF
    line-height (200 / 750 * 100)vw
    font-weight bold
.bottom
  padding 8px 0 0
  .cell-group
    background-color #fff

.icon-img
  width 28px
  height 28px
  margin-right 10px

</style>
