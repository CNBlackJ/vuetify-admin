<template>
  <v-app id="inspire" v-resize="onResize">
    <Navbar :drawerStatus="drawer"/>

    <Toolbar v-on:openDrawer="onOpenDrawer" :drawer="drawer"/>

    <Main />

    <Footer />
    <v-fab-transition>
      <v-btn
        @click="onClickUpper"
        style="right: 5%; bottom: 5%"
        v-model="fab"
        color="primary"
        dark
        fab
        fixed
        bottom
        right
      >
        <v-icon>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
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
      fab: false,
      drawer: false
    }
  },
  methods: {
    onOpenDrawer (val) {
      this.drawer = val
    },
    onResize () {
      console.log({
        x: window.innerWidth,
        y: window.innerHeight
      })
    },
    onClickUpper () {
      window.scrollTo(0, 0)
    }
  }
}
</script>