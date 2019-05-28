<template>
  <v-container>
    <v-layout>
      <InquiryTable />
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    InquiryTable: Table
  }
}
</script>