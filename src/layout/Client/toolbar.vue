<template>
  <v-toolbar color="black" dark fixed app>
    <v-toolbar-side-icon @click.stop="onOpenDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="hidden-sm-and-down" @click="onClickTitle">HERHAIRWORLD</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-toolbar-items>
      <v-btn flat @click="onClickHome">Home</v-btn>
      <v-btn flat @click="onClickProducts">Products</v-btn>
      <v-btn flat>
        <v-badge right>
          <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon
            large
            color="grey lighten-1"
            @click="onClickCart"
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
    },
    onClickCart () {
      this.$router.push('/carts')
    },
    onClickProducts () {
      this.$router.push('/products')
    },
    onClickHome () {
      this.onClickTitle()
    }
  }
}
</script>
