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
      :items="categoryList"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr @click="onClickRow(props.item)">
          <td>{{ props.item.index }}</td>
          <td class="text-xs-left">{{ props.item.name }}</td>
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
      categoryList: state => state.category.categoryList
    })
  },
  created () {
    this.$store.dispatch('category/getCategoryList', {})
  },
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      },
      headers: [
        { text: '序号', value: 'index' },
        { text: '名称', value: 'name', align: 'center' },
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
