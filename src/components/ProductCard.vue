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

        <v-card-title @click="goProductDetail" :class="{ 'pa-2': $vuetify.breakpoint.smAndDown }">
          <div>
            <div :class="{
                'headline': $vuetify.breakpoint.smAndUp,
                'subheading': $vuetify.breakpoint.smAndDown
              }">
              Vnet TShirt
            </div>
            <span class="grey--text">$ {{ Math.floor(Math.random() * 100).toFixed(2) }}</span>
          </div>
        </v-card-title>

        <v-container class="pt-0">
          <v-layout row wrap>
            <v-flex class="hidden-sm-and-down pa-0" md3 lg3 xl3>
              <v-btn small icon flat>
                <v-icon>share</v-icon>
              </v-btn>
            </v-flex>
            <v-flex class="pa-0" xs3 sm3 md3 lg3 xl3>
              <v-btn small icon flat @click="onAddToCart" class="mr-0 ml-0">
                <v-icon>add_shopping_cart</v-icon>
              </v-btn>
            </v-flex>
            <v-flex class="pa-0" xs9 sm9 md6 lg6 xl6>
              <v-btn small @click="onInquiry" color="primary" dark>Inquiry</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
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
    },
    onInquiry () {
      this.$router.push({
        path: '/inquiry'
      })
    }
  }
}
</script>