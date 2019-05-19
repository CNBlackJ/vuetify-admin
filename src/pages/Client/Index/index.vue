<template>
  <div id="index-page">
    <Swiper />

    <Categories />

    <v-divider></v-divider>

    <FeaturedProduct />

    <v-divider></v-divider>

    <BusinessSolution />

    <v-divider></v-divider>

    <FactoryPrice />

    <v-divider></v-divider>

    <SecretMarket />

    <HairBrand />
  </div>
</template>

<script>
import Swiper from './components/Swiper/index'
import Categories from './components/Categories/index'
import FeaturedProduct from './components/FeaturedProduct/index'
import BusinessSolution from './components/BusinessSolution/index'
import FactoryPrice from './components/FactoryPrice/index'
import SecretMarket from './components/SecretMarket/index'
import HairBrand from './components/HairBrand/index'

export default {
  components: {
    Swiper,
    Categories,
    FeaturedProduct,
    BusinessSolution,
    FactoryPrice,
    SecretMarket,
    HairBrand
  }
}
</script>

<style lang="scss">
  #index-page {
    .v-carousel {
      width: 100%;
    }
  }
</style>