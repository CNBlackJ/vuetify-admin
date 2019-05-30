<template>
  <v-container grid-list-md class="admin-detail">
    <v-layout class="pb-2" align-center justify-space-between row>
      <span class="title">
        产品详情
      </span>
      <div>
        <v-btn flat icon color="info">
          <v-icon dark>edit</v-icon>
        </v-btn>
        <v-btn flat icon color="error">
          <v-icon dark>delete</v-icon>
        </v-btn>
      </div>
    </v-layout>

    <v-divider></v-divider>

    <v-layout>
      <div class="pa-2 subheading">
        封面图：
      </div>
      <v-flex md2>
        <v-img
          :src="product.mainImg"
          contain
          class="grey darken-4 elevation-1"
        ></v-img>
      </v-flex>
      <v-flex md9>
        <div class="pa-2">
          <span class="subheading">产品名称：</span>
          <span class="body-1">{{product.name}}</span>
        </div>
        <div class="pa-2">
          <span class="subheading">价格：</span>
          <span class="body-1">$ {{product.price}}</span>
        </div>
        <div class="pa-2">
          <span class="subheading">类别：</span>
          <span class="body-1">{{product.category.name}}</span>
        </div>
        <div class="pa-2">
          <span class="subheading">排序：</span>
          <span class="body-1">{{product.index}}</span>
        </div>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex md6>
        <ImageWrapper
          :title="'产品图'"
          :images="product.imgs"/>
      </v-flex>
      <v-flex md6>
        <ImageWrapper
          :title="'详情图'"
          :images="getDetailImgs(product.detailImgs)"/>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
import Image from './components/Image'

export default {
  components: {
    ImageWrapper: Image
  },
  data () {
    return {
      product: {
        category: {}
      }
    }
  },
  async created () {
    const id = this.$route.params.id
    this.product = await this.$store.dispatch('product/getProduct', id)
  },
  methods: {
    getDetailImgs (detailImgs) {
      if (detailImgs) return detailImgs.product
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin-detail {
    background-color: #fff;
  }
</style>
