<template>
  <v-container>
    <v-layout>
      <CategoryTable />
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    CategoryTable: Table
  }
}
</script>