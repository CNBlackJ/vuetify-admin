<template>
  <v-container>
    <InfoCard />

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 v-for="(item, i) in 6" :key="i">
          <v-img
            :src="`https://picsum.photos/300/600?image=${Math.floor(Math.random() * 100) + 1}`"
            :lazy-src="`https://picsum.photos/10/6?image=${Math.floor(Math.random() * 100) + 1}`"
            height="600px"
          >
          </v-img>
        </v-flex>
      </v-layout>
    </v-container>

    <Recommendation />    
  </v-container>
</template>

<script>
import InfoCard from './components/InfoCard'
import Recommendation from '@/components/Recommendation'
export default {
  components: {
    InfoCard,
    Recommendation
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
