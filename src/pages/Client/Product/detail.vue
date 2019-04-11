<template>
  <div class="product-details">
    <InfoCard />

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

    <v-container>
      <v-layout justify-center align-center>
        <v-flex class="display-2 font-weight-light text-md-center py-5">
          Recommand for You
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-space-around>
        <v-flex v-for="i in 3" :key="i" xs12 sm6 md3 justify-space-around>
          <ProductCard
            :title="`Pre-fab homes ${i}`"
            :img="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
            :subTitle="'Top western road trips'"/>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import InfoCard from './components/InfoCard'
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    InfoCard,
    ProductCard
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
