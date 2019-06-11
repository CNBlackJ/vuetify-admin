<template>
  <v-card class="white--text">
    <v-card-title primary-title>
      <div>
        <v-chip
          small
          v-for="item in priceInfoList"
          :key="item.id"
          close
          color="primary"
          outline
          @input="removeItem(item)"
        >{{item.model}} - ${{item.price}}</v-chip>
      </div>
    </v-card-title>
    <v-divider light></v-divider>
    <v-card-actions>
      <v-text-field
        :label="label + '*'"
        v-model="priceInfoForm.model"
      ></v-text-field>
      <v-spacer></v-spacer>
      <Counter
        :label="'价格*'"
        :required="true"
        v-on:updateCounter="onUpdateCounter"/>
      <v-spacer></v-spacer>
      <v-btn small outline color="indigo" @click="onAddPriceInfo">
        <v-icon>add</v-icon>
        添加
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Counter from '@/components/Counter'
export default {
  components: {
    Counter
  },
  props: {
    label: {
      type: String,
      default: 'Package'
    }
  },
  data () {
    return {
      priceInfoForm: {
        model: '',
        price: 0
      },
      priceInfoList: []
    }
  },
  methods: {
    removeItem ({ id }) {
      const priceInfoList = [...this.priceInfoList]
      this.priceInfoList.find((ele, i) => {
        if (ele.id === id) priceInfoList.splice(i, 1)
      })
      this.priceInfoList = [...priceInfoList]
    },
    onAddPriceInfo () {
      this.priceInfoForm.id = this.priceInfoList.length
      this.priceInfoList.push({
        ...this.priceInfoForm
      })
    },
    onUpdateCounter (price) {
      this.priceInfoForm.price = price
    }
  }
}
</script>