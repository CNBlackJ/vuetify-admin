<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="onOpenDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    drawer: Boolean
  },
  methods: {
    onOpenDrawer () {
      this.$emit('openDrawer', !this.drawer)
    }
  }
}
</script>
