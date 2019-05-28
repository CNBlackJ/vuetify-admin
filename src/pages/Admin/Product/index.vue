<template>
  <v-container>
    <v-layout>
      <ProductTable />
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    ProductTable: Table
  }
}
</script>