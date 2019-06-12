<template>
  <form>
    <v-text-field
      v-model="name"
      v-validate="'required|max:8'"
      :counter="10"
      :error-messages="errors.collect('name')"
      label="用户名"
      data-vv-name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      v-validate="'required'"
      :append-icon="showPwd ? 'visibility' : 'visibility_off'"
      :type="showPwd ? 'text' : 'password'"
      label="密码"
      data-vv-name="password"
      :error-messages="errors.collect('password')"
      counter
      required
      @click:append="showPwd = !showPwd"
    ></v-text-field>

    <v-btn @click="submit">登陆</v-btn>
    <v-btn @click="clear">重置</v-btn>
  </form>
</template>

<script>
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import md5 from 'md5'
import { setToken } from '@/utils/auth'

Vue.use(VeeValidate)

export default {
  $_veeValidate: {
    validator: 'new'
  },
  data: () => ({
    name: '',
    email: '',
    password: '',
    showPwd: false,
    dictionary: {
      custom: {
        name: {
          required: () => '用户名不能为空',
          max: '用户名最长不超过8位'
          // custom messages
        },
        password: {
          required: () => '密码不能为空'
        }
      }
    }
  }),

  mounted () {
    this.$validator.localize('en', this.dictionary)
  },
  methods: {
    submit () {
      const that = this
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          const payload = {
            username: this.name, 
            password: md5(this.password)
          }
          that.$store.dispatch('auth/login', payload).then(resp => {
            if (!resp.error_code) {
              const userInfo = resp.data
              that.$store.commit('auth/SET_USER_INFO', userInfo)
              const authToken = userInfo.authToken
              setToken(authToken)
            } else {
              throw new Error(resp.error_msg)
            }
          }).catch(err => {
            if (err) that.$emit('showTips', String(err))
          })
        }
      })
    },
    clear () {
      this.name = ''
      this.password = ''
      this.$validator.reset()
    }
  }
}
</script>
