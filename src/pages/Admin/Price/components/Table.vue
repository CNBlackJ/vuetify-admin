<template>
  <v-card>
    <v-card-title>
      定价管理
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
      :items="priceList"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr @click="onClickRow(props.item)">
          <td>{{ props.index + 1 }}</td>
          <td class="text-xs-left">{{ props.item.key }}</td>
          <td class="text-xs-left">{{ dataTypeMap[props.item.dataType] }}</td>
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
      priceList: state => state.price.priceList,
      dataTypeMap: state => state.price.dataTypeMap
    })
  },
  created () {
    this.$store.dispatch('price/getPriceList', {})
  },
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      },
      headers: [
        { text: '序号', value: 'index' },
        { text: '定价属性', value: 'key' },
        { text: '数据类型', value: 'dataType' }
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
