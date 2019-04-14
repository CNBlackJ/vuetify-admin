<template>
  <v-toolbar color="indigo" dark fixed app>
    <v-toolbar-side-icon @click.stop="onOpenDrawer"></v-toolbar-side-icon>
    <v-toolbar-title @click="onClickTitle">HERHAIRWORLD</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Home</v-btn>
      <v-btn flat>Products</v-btn>
      <v-btn flat>
        <v-badge right>
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon
            large
            color="grey lighten-1"
          >
            shopping_cart
          </v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
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
    },
    onClickTitle () {
      this.$router.push('/')
    }
  }
}
</script>
