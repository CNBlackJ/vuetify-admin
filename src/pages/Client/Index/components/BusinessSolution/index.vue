<template>
  <v-container grid-list-xl  class="pa-0">
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5" :class="{ 'display-1': $vuetify.breakpoint.xs }">
        BUSINESS SOLUTION
      </v-flex>
    </v-layout>

    <p class="text-md-center">
      Growing your business is our target and we provide solutions to make you successful！
    </p>

    <v-layout row wrap>
      <v-flex v-for="i in 4" :key="i"
        xs12 sm12 md3 lg3 xl3>
        <Card
          :title="`busines  solution ${i}`"
          :img="`https://picsum.photos/200/200?image=${Math.floor(Math.random() * 100) + 1}`"
          :subTitle="'Top western road trips'"/>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center row>
      <v-btn @click="onInquiry" color="primary">GET YOUR OWN SOLUTION NOW</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import Card from './Card'

export default {
  components: {
    Card
  },
  methods: {
    onInquiry () {
      this.$router.push({
        path: '/inquiry'
      })
    }
  }
}
</script>
