<template>
  <v-container>
    <v-layout>
      <UserTable />
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'

export default {
  components: {
    UserTable: Table
  }
}
</script>