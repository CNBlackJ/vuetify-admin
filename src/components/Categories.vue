<template>
  <v-container grid-list-xl>
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5">
        Shop by Category
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="i" xs12 sm6 md3 lg4 xl3>
        <CategoryCard
          :title="`Pre-fab homes ${i}`"
          :img="`https://picsum.photos/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
          :subTitle="'Top western road trips'"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CategoryCard from './CategoryCard'
export default {
  components: {
    CategoryCard
  }
}
</script>
