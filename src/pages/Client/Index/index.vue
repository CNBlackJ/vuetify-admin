<template>
  <div id="index-page">
    <Swiper />

    <Categories />

    <NewIn />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Categories from '@/components/Categories/index'
import NewIn from '@/components/NewIn'

export default {
  components: {
    Swiper,
    Categories,
    NewIn
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