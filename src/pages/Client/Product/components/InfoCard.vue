<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm5 md5>
        <Swiper :height="420" />
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md6>
        <div class="display-3 font-weight-medium">
          Belt Belt Belt Belt
        </div>
        <div class="display-1 font-weight-regular py-4">
          $60
        </div>
        <v-flex d-flex xs12 sm6 md6>
          <v-select
            :items="sizeItems"
            label="Size"
          ></v-select>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <Counter />
        </v-flex>
        <v-flex xs12 class="pt-4">
          <v-btn color="info" large>
            <v-icon>add_shopping_cart</v-icon>
            Add to Cart
          </v-btn>

          <v-btn fab flat>
            <v-icon>favorite_border</v-icon>
          </v-btn>
        </v-flex>
        <v-flex>
          Category: catA
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Swiper from '@/components/Swiper'
import Counter from '@/components/Counter'
export default {
  components: {
    Swiper,
    Counter
  },
  data () {
    return {
      sizeItems: [
        '10', '11', '20'
      ]
    }
  }
}
</script>
