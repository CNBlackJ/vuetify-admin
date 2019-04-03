<template>
  <v-app>
    <Navbar />

    <Main />

    <Footer />
  </v-app>
</template>

<script>
import main from './main'
import navbar from './navbar'
import sidebar from './sidebar'
import footer from './footer'

export default {
  components: {
    Main: main,
    Navbar: navbar,
    Sidebar: sidebar,
    Footer: footer
  }
}
</script>