<template>
  <v-tabs
    v-model="active"
    color="primary"
    dark
    slider-color="yellow"
  >
    <v-tab
      v-for="item in categoryList"
      :key="item.id"
      ripple
    >
      {{ item.name }}
    </v-tab>
    <v-tab-item
      v-for="n in categoryList.length"
      :key="n"
    >
      <v-container grid-list-md pa-0>
        <v-layout row wrap class="pt-4">
          <v-flex v-for="i in 9" :key="i" xl3 lg3 md3 sm6 xs6>
            <ProductCard />
          </v-flex>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      active: null,
      categoryList: [
        { id: 1, name: 'category A' },
        { id: 2, name: 'category B' },
        { id: 3, name: 'category C' },
        { id: 4, name: 'category D' },
        { id: 5, name: 'category E' },
        { id: 6, name: 'category F' }
      ]
    }
  }
}
</script>
