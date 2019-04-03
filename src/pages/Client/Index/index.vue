<template>
  <div style="width: 100%">
    <Swiper />

    <Categories />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Categories from '@/components/Categories'
export default {
  components: {
    Swiper,
    Categories
  }
}
</script>
