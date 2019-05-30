<template>
  <v-container>
    <v-layout>
      <ProductTable v-on:addProduct="onAddProduct"/>
    </v-layout>

    <v-layout row justify-center>
      <v-dialog v-model="showDialog" persistent max-width="600px">
        <ProductForm v-on:closeDialog="onCloseDialog"/>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import Table from './components/Table'
import Form from './components/Form'

export default {
  components: {
    ProductTable: Table,
    ProductForm: Form
  },
  data () {
    return {
      showDialog: false
    }
  },
  methods: {
    onCloseDialog () {
      this.showDialog = false
    },
    onAddProduct () {
      this.showDialog = true
    }
  }
}
</script>