<template>
  <v-container>
    <v-layout justify-center align-center>
      <v-flex class="display-1 font-weight-light text-md-center py-5">
        Your Cart
      </v-flex>
    </v-layout>

    <Table />

    <v-layout align-end justify-center column fill-height>
      <v-flex>
        Subtotal: $20
      </v-flex>
      <v-flex>
        Shipping: $20
      </v-flex>
      <v-flex>
        <v-btn color="info">CHECK OUT</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/table'
export default {
  components: {
    Table
  }
}
</script>