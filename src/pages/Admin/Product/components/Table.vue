<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="productList"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr @click="onClickRow(props.item)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-right">{{ props.item.price }}</td>
          <td class="text-xs-right">{{ props.item.color }}</td>
          <td class="text-xs-right">{{ props.item.category.name }}</td>
          <td class="text-xs-right">{{ props.item.quantity }}</td>
          <td class="text-xs-right">{{ props.item.package }}</td>
        </tr>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      productList: state => state.product.productList
    })
  },
  created () {
    this.$store.dispatch('product/getProductList', {})
  },
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      },
      headers: [
        {
          text: '名称',
          align: 'left',
          sortable: false,
          value: 'name',
          width: '500px'
        },
        { text: '价格', value: 'price' },
        { text: '颜色', value: 'color' },
        { text: '类别', value: 'category.name' },
        { text: '数量', value: 'quantity' },
        { text: '包装', value: 'package' }
      ]
    }
  },
  methods: {
    onClickRow ({ _id }) {
      this.$router.push({
        path: `/admin/product/${_id}`
      })
    }
  }
}
</script>
