<template>
  <v-layout row>
    <v-flex>
      <v-card>
        <v-img
          :src="`https://picsum.photos/500/300?image=${Math.floor(Math.random() * 100) + 1}`"
          :lazy-src="`https://picsum.photos/10/6?image=${Math.floor(Math.random() * 100) + 1}`"
          height="200px"
          @click="goProductDetail"
        >
        </v-img>

        <v-card-title primary-title @click="goProductDetail">
          <div>
            <div class="headline">Vnet TShirt</div>
            <span class="grey--text">$ {{ Math.floor(Math.random() * 100).toFixed(2) }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn icon flat>
            <v-icon>share</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn @click="onAddToCart">
            <v-icon>add_shopping_cart</v-icon>
          </v-btn>
          <v-btn color="#dd127b" dark>Inquiry</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>

    <AddToCartDialog :showDialog="showDialog" v-on:hideDialog="onHideDialog"/>
  </v-layout>
</template>

<script>
import { AddToCart } from '@/components/Dialog'
export default {
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  components: {
    AddToCartDialog: AddToCart
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    goProductDetail () {
      this.$router.push(`/products/1`)
    },
    onAddToCart () {
      this.onShowDialog()  
    },
    onShowDialog () {
      this.showDialog = true
    },
    onHideDialog () {
      this.showDialog = false
    }
  }
}
</script>