<template>
  <v-container grid-list-lg class="pa-0">
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5" :class="{ 'display-1': $vuetify.breakpoint.xs }">
        FEATURED PRODUCTS
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="i" xs6 sm6 md3>
        <ProductCard />
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