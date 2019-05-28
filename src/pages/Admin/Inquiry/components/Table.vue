<template>
  <v-card>
    <v-card-title>
      询盘用户列表
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
      :items="inquiryList"
      :search="search"
      :pagination.sync="pagination"
    >
      <template v-slot:items="props">
        <tr @click="onClickRow(props.item)">
          <td>{{ props.item.name }}</td>
          <td class="text-xs-center">{{ props.item.email }}</td>
          <td class="text-xs-center">{{ props.item.country }}</td>
          <td class="text-xs-center">{{ props.item.mobile }}</td>
          <td class="text-xs-center">{{ props.item.businessTypes.join(',') }}</td>
          <td class="text-xs-center">{{ props.item.sendPage ? props.item.sendPage.path : '-' }}</td>
          <td class="text-xs-center">{{ props.item.comment }}</td>
          <td class="text-xs-center">{{ props.item.createdAt }}</td>
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
      inquiryList: state => state.inquiry.inquiryList
    })
  },
  created () {
    this.$store.dispatch('inquiry/getInquiryList', {})
  },
  data () {
    return {
      search: '',
      pagination: {
        rowsPerPage: 10
      },
      headers: [
        {
          text: '姓名',
          align: 'left',
          sortable: false,
          value: 'name',
        },
        { text: '邮箱', value: 'email' },
        { text: '国家', value: 'country' },
        { text: '手机', value: 'mobile' },
        { text: '业务类型', value: 'businessTypes' },
        { text: '询盘入口', value: 'sendPage.path' },
        { text: '留言', value: 'comment' },
        { text: '时间', value: 'createdAt' }
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
