<template>
  <v-container>
    <v-card>
      <v-card-title>
        Cart
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-tabs v-model="active" color="primary" dark slider-color="yellow" >
        <v-tab v-for="tab in tabList" :key="tab.id" ripple>
          {{tab.name}}
        </v-tab>
        <v-tab-item
          v-for="n in tabList.length"
          :key="n"
        >
          <Table />
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import Table from './components/table'
import Card from './components/Card'

export default {
  components: {
    Table,
    Card
  },
  data () {
    return {
      active: null,
      search: null,
      tabList: [
        { id: 1, name: 'ALL' },
        { id: 2, name: 'SHOPPED' },
      ]
    }
  }
}
</script>