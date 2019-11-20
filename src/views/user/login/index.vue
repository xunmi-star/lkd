<template>
  <div class="login-wrapper">
    <!-- <div class="title">{{$t('user.login')}}</div> -->
    <div class="title"></div>
    <form class="form-box">
      <!-- 账号 -->
      <div class="input-box">
        <svg class="svg" t="1561952324203" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7684" width="200" height="200"><path d="M590 545.1H433.9C284 545.1 162 670 162 823.5v16c0 21.2 7.7 38.5 23 51.4 13.5 11.4 32.9 19.7 59.4 25.2 48.4 10.1 113.8 10.1 189.4 10.1H590c71 0 138 0 187.2-10.1 27-5.6 46.9-13.8 60.7-25.1 15.9-13 23.9-30.3 24-51.5v-16C862 670 740 545.1 590 545.1z m215.3 278.4v16c0 5.6-5.8 10.6-17.1 15-11.9 4.6-29.6 8.1-52.6 10.6-43.5 4.6-97.7 4.6-145.5 4.6H433.9c-52.7 0-107.2 0-149.4-4.6-57.3-6.2-65.9-18.7-65.9-25.5v-16c0-122.3 96.6-221.8 215.3-221.8H590c118.7 0 215.3 99.4 215.3 221.7zM504.2 542.8c119.8 0 217.2-99.8 217.2-222.6 0-122.7-97.5-222.5-217.2-222.5-119.8 0-217.2 99.8-217.2 222.5-0.1 122.8 97.4 222.6 217.2 222.6zM343.6 320.3c0-91.5 72-165.9 160.6-165.9s160.6 74.4 160.6 165.9-72 165.9-160.6 165.9-160.6-74.5-160.6-165.9z" fill="#FA7133" p-id="7685"></path></svg>
        <rg-input class="left20" ref="account" placeholder="请输入账号" mask="99999999999" :max="11" v-model="account" is-type="china-mobile"></rg-input>
      </div>
      <!-- 密码  -->
      <div class="input-box">
        <svg class="svg" t="1561948837248" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6904" width="200" height="200"><path d="M795.753087 396.817678l-29.925566 0L765.827521 279.989879c0-140.375098-99.423407-250.359025-240.645802-250.359025-141.772934 0-238.402715 112.313995-238.402715 250.359025l0 116.827799-29.936823 0c-66.042135 0-119.746268 54.846142-119.746268 122.372072l0 367.089609c0 67.50137 53.703109 122.394584 119.746268 122.394584l538.910906 0c66.067718 0 119.771851-54.894238 119.771851-122.394584L915.524938 519.189749C915.524938 451.662797 861.819782 396.817678 795.753087 396.817678L795.753087 396.817678zM346.64037 279.989879c0-104.244202 69.78232-189.161221 178.541349-189.161221 107.631346 0 180.7609 83.101673 180.7609 189.161221l0 116.827799L346.64037 396.817678 346.64037 279.989879 346.64037 279.989879zM855.614453 886.279359c0 33.750685-26.845415 61.198827-59.861366 61.198827L256.842181 947.478186c-33.026184 0-59.884902-27.447119-59.884902-61.198827L196.957279 519.189749c0-33.727149 26.857694-61.173245 59.884902-61.173245l538.910906 0c33.015951 0 59.861366 27.446096 59.861366 61.173245L855.614453 886.279359 855.614453 886.279359zM526.298146 580.313875c-33.05279 0-59.862389 27.471678-59.862389 61.245899 0 22.665209 12.043291 42.409902 29.9358 52.981678l0 100.001575c0 16.875343 13.405311 30.562063 29.92659 30.562063 16.542768 0 29.936823-13.68672 29.936823-30.562063L556.234969 694.541453c17.879206-10.571776 29.949103-30.316469 29.949103-52.981678C586.184071 607.785553 559.362192 580.313875 526.298146 580.313875L526.298146 580.313875 526.298146 580.313875z" p-id="6905" fill="#FA7133"></path></svg>
        <rg-input class="left20" ref="password" :placeholder="$t('user.pwdPlacehold')" v-model="pwd" type="password" :is-type="$valid.pwd"></rg-input>
      </div>
      <!-- 注册按钮 -->
      <div class="reg-box">
        <span @click="onClickRegister">{{$t('user.register')}}</span>
      </div>
    </form>

    <div class="btn-box">
      <!-- 登入按钮 -->
      <!-- <btn type="primary" style="width: 40%" @click.native="onClickLogin">{{$t('user.login')}}</btn> -->
      <button class="con" style="width: 100%" @click="onClickLogin">登录</button>
      <!-- 忘记密码按钮 -->
      <div class="text" @click="onclickFindPwd">{{$t('user.forgetPwd')}}?</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Input from "@/components/input";

export default {
  name: "login",
  components: {
    rgInput: Input
  },

  data() {
    let query = this.$route.query
    return {
      account: query.account || "",
      pwd: "",
    };
  },

  mounted(){
    // console.log("登录后做了什么",this.$refs.password.valid)
  },

  methods: {
    ...mapActions({ login: "user/login" }),
    onClickRegister() {
      this.$router.push({ name: "register" })
    },
    onclickFindPwd() {
      console.log(324234234)
      this.$router.push({ name: "findPwd" })
    },
    onClickLogin() {
      let $refs = this.$refs;
      if (!$refs.account.valid) {
        this.$toast.show(this.$t('user.accountError'));
        return;
      }
      if (!$refs.password.valid) {
        this.$toast.show(this.$t('user.pwdError'));
        return;
      }
      this.login({ loginName: this.account, password: this.pwd }).then(
        () => {
          this.$router.replace({ name: "home" })
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
<style lang="stylus" scoped>
.login-wrapper
  .title
    font-size 24px
    color #FB6C28
    text-align center
    font-weight bold
.form-box
  margin-top 0.7rem
  .input-box
    border-bottom 1px solid #D2D2D2
    margin-bottom 10px
    display flex
.form-icon
  margin-right 10px
  color #FB6C28
.reg-box
  color #FB6C28
  text-align right
  font-size 10px
.btn-box
  margin-top 20px
  .text
    margin-top 5px
    font-size 10px
    color #676767
.svg
  height 20px
  width 20px 
  margin 12px 13px 0
.left20
  margin-left -20px
.con
  border none
  position relative
  display block;
  margin-left: auto
  margin-right auto
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
