<template>
  <v-layout row>
    <v-flex>
      <v-card @click="onClick">
        <v-img
          :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
          height="200px"
        >
        </v-img>

        <v-card-title primary-title>
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
          <v-btn>
            <v-icon>add_shopping_cart</v-icon>
          </v-btn>
          <v-btn color="purple" dark>Inquiry</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    onClick () {
      this.$router.push(`/products/1`)
    }
  }
}
</script>