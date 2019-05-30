<template>
  <v-container class="pa-0">
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
          <div class="hidden-sm-and-down">
            <Table />
          </div>
          <div class="hidden-sm-and-up">
            <List />
            <v-card color="primary darken-1" class="white--text">
              <v-card-text class="text-xs-right">
                <span>
                  Subtotal: 
                  <span>$ 100.00</span>
                </span>
                <span>
                  Shipping: 
                  <span>$ 29.99</span>
                </span>
                <span>
                  Amount: 
                  <span>$ 129.99</span>
                </span>
              </v-card-text>
              <v-divider light></v-divider>
              <v-card-text class="text-xs-right">
                <v-btn flat dark>Check Out</v-btn>
              </v-card-text>
            </v-card>
          </div>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-container>
</template>

<script>
import Table from './components/Table'
import List from './components/List'
import Card from './components/Card'

export default {
  components: {
    Table,
    List,
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