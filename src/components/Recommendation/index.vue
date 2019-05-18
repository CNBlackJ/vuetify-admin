<template>
  <v-container>
    <v-layout justify-center align-center row>
      <v-flex class="display-2 font-weight-light text-md-center py-5">
        Recommand for You
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex v-for="i in 4" :key="i" xs6 sm6 md3 justify-space-around class="pt-4">
        <ProductCard
          :title="`Pre-fab homes ${i}`"
          :img="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
          :subTitle="'Top western road trips'"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard
  }
}
</script>
