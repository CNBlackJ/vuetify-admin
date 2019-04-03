<template>
  <v-app id="inspire">
    <Navbar :drawerStatus="drawer"/>

    <Toolbar v-on:openDrawer="onOpenDrawer" :drawer="drawer"/>

    <Main />

    <Footer />
  </v-app>
</template>

<script>
import main from './main'
import navbar from './navbar'
import sidebar from './sidebar'
import footer from './footer'
import toolbar from './toolbar'

export default {
  components: {
    Main: main,
    Navbar: navbar,
    Sidebar: sidebar,
    Footer: footer,
    Toolbar: toolbar
  },
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    onOpenDrawer (val) {
      this.drawer = val
    }
  }
}
</script>