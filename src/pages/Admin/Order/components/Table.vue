<template>
  <v-card>
    <v-card-title>
      类别管理
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
      :items="orderList"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr @click="onClickRow(props.item)">
          <td>{{ props.item._id }}</td>
          <td class="text-xs-left">{{ props.item.userId }}</td>
          <td class="text-xs-left">{{ props.item.price }}</td>
          <td class="text-xs-left">{{ props.item.status }}</td>
          <td class="text-xs-left">{{ props.item.createdAt }}</td>
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
      orderList: state => state.order.orderList
    })
  },
  created () {
    this.$store.dispatch('order/getOrderList', {})
  },
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      },
      headers: [
        { text: '订单号', value: '_id' },
        { text: '用户', value: 'userId', align: 'center' },
        { text: '订单金额', value: 'price', align: 'center' },
        { text: '订单状态', value: 'status', align: 'center' },
        { text: '创建时间', value: 'createdAt', align: 'center' }
      ]
    }
  },
  methods: {
    onClickRow ({ _id }) {
      console.log(_id)
    }
  }
}
</script>
