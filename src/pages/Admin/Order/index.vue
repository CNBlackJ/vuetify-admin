<template>
  <v-container>
    <v-layout>
      <OrderTable />
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    OrderTable: Table
  }
}
</script>