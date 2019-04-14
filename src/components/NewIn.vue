<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5">
        New In
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex v-for="i in 9" :key="i" xs12 sm6 md3>
        <ProductCard />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductCard from './ProductCard'
export default {
  components: {
    ProductCard
  }
}
</script>