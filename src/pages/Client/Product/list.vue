<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex v-for="i in 9" :key="i" xs12 sm6 md3>
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
