<template>
  <v-card>
    <v-card-title>
      产品列表
      <v-btn flat icon color="primary" @click="onAddProduct">
        <v-icon dark>add</v-icon>
      </v-btn>
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
          <td class="justify-center layout px-0">
            <v-icon color="blue darken-2" small class="mr-2" @click.stop="onEditItem(props.item)">
              edit
            </v-icon>
            <v-icon color="red darken-2" small @click.stop="onDeleteItem(props.item)">
              delete
            </v-icon>
          </td>
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
        { text: '包装', value: 'package' },
        { text: '操作', value: '', sortable: false }
      ]
    }
  },
  methods: {
    onClickRow ({ _id }) {
      this.$router.push({
        path: `/admin/product/${_id}`
      })
    },
    onAddProduct () {
      this.$emit('addProduct', true)
    },
    onEditItem (item) {
      console.log(item)
    },
    onDeleteItem (item) {
      console.log(item)
    }
  }
}
</script>
