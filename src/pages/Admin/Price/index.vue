<template>
  <v-container>
    <v-layout>
      <PriceTable />      
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    PriceTable: Table
  }
}
</script>
