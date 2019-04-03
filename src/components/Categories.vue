<template>
  <v-container grid-list-md>
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5">
        Shop by Category
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex v-for="i in 4" :key="i" xs3>
        <Card
          :title="`Pre-fab homes ${i}`"
          :img="'https://cdn.vuetifyjs.com/images/cards/house.jpg'"
          :subTitle="'Top western road trips'"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CategoryCard from './CategoryCard'
export default {
  components: {
    Card: CategoryCard
  }
}
</script>
