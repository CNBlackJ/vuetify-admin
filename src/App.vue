<template>
  <div id="app" :style="{ 'fontSize': fontSize }">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    fontSize () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '1em';
        case 'sm': return '1em';
        case 'md': return '1em';
        case 'lg': return '1.3em';
        case 'xl': return '1em';
        default: return '5em';
      }
    }
  }
}
</script>

<style>
  #app {
    height: 100%;
    width: 100%;
  }
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
  }
</style>
