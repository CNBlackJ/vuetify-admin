<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :pagination.sync="pagination"
    select-all
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:headers="props">
      <tr>
        <th>
          <v-checkbox
            :input-value="props.all"
            :indeterminate="props.indeterminate"
            primary
            hide-details
            @click.stop="toggleAll"
          ></v-checkbox>
        </th>
        <th
          v-for="header in props.headers"
          :key="header.text"
          :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
          @click="changeSort(header.value)"
        >
          <v-icon small>arrow_upward</v-icon>
          {{ header.text }}
        </th>
      </tr>
    </template>
    <template v-slot:items="props">
      <tr :active="props.selected" @click="props.selected = !props.selected">
        <td>
          <v-checkbox
            :input-value="props.selected"
            primary
            hide-details
          ></v-checkbox>
        </td>
        <td>
          <v-img
            :src="props.item.image"
            height="80">
          </v-img>
        </td>
        <td>{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.size }}</td>
        <td class="text-xs-center">{{ props.item.price }}</td>
        <td class="text-xs-center">{{ props.item.quantity }}</td>
        <td class="text-xs-center">{{ props.item.amount }}</td>
        <td class="justify-center text-xs-center">
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </tr>
    </template>
    <template v-slot:footer>
      <td :colspan="headers.length + 1">
        <v-card-text class="text-md-right">
          <span class="pr-2">
            Subtotal: 
            <span>$ 100.00</span>
          </span>
          <span class="pr-2">
            Shipping:
            <span>$ 29.99</span>
          </span>
          <span class="pr-2">
            Amount:
            <span>$ 129.99</span>
          </span>
          <div>
            <v-btn color="primary">
              <v-icon>
                check
              </v-icon>
              CHECK OUT
            </v-btn>
          </div>
        </v-card-text>
      </td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
      pagination: {
        sortBy: 'name',
        rowsPerPage: -1
      },
      selected: [],
      headers: [
        {
          text: 'Image',
          value: 'image'
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Size', value: 'size' },
        { text: 'Price', value: 'price' },
        { text: 'Quantity', value: 'quantity' },
        { text: 'Amount', value: 'amount' },
        { text: 'Action', value: 'action' }
      ],
      desserts: [
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Frozen Yogurt',
          size: 159,
          price: 6.0,
          quantity: 24,
          amount: 4.0
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Ice cream sandwich',
          size: 237,
          price: 9.0,
          quantity: 37,
          amount: 4.3
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Eclair',
          size: 262,
          price: 16.0,
          quantity: 23,
          amount: 6.0
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Cupcake',
          size: 305,
          price: 3.7,
          quantity: 67,
          amount: 4.3
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Gingerbread',
          size: 356,
          price: 16.0,
          quantity: 49,
          amount: 3.9
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Jelly bean',
          size: 375,
          price: 0.0,
          quantity: 94,
          amount: 0.0
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Lollipop',
          size: 392,
          price: 0.2,
          quantity: 98,
          amount: 0
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Honeycomb',
          size: 408,
          price: 3.2,
          quantity: 87,
          amount: 6.5
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'Donut',
          size: 452,
          price: 25.0,
          quantity: 51,
          amount: 4.9
        },
        {
          image: 'https://picsum.photos/400/400?image=4',
          name: 'KitKat',
          size: 518,
          price: 26.0,
          quantity: 65,
          amount: 7
        }
      ]
    }),

    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.desserts.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      }
    }
  }
</script>