<template>
  <div class="product-details">
    <Card />

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 v-for="(item, i) in 6" :key="i">
          <v-img
            :src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
            height="400px"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Card from './components/Card'
export default {
  components: {
    Card
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.params.id
  }
}
</script>

<style>
  .product-details {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>
