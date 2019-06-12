<template>
  <v-container fill-height>
    <v-layout align-center justify-center row fill-height>
      <v-flex xs12 sm12 md6 lg6 xl6>
        <div v-if="showTips"
          class="grey lighten-2 text-xs-center pa-1">
          <span>
            您的用户名或密码输入错误。
          </span>
          <span
            @click="onCloseTops"
            style="float: right; padding-right: 5px; cursor: pointer;">
            x
          </span>
        </div>
        <LoginForm v-on:showTips="onShowTips" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from './components/LoginForm'

export default {
  components: {
    LoginForm
  },
  data () {
    return {
      showTips: false
    }
  },
  methods: {
    onShowTips (err) {
      this.showTips = true
    },
    onCloseTops () {
      this.showTips = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .show-tips {
    text-align: center;
    width: 100%;
    color: red;
  }
</style>
