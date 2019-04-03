<template>
  <div style="width: 100%">
    <Swiper />

    <Categories />

    <News />
  </div>
</template>

<script>
import Swiper from '@/components/Swiper'
import Categories from '@/components/Categories'
import News from '@/components/News'

export default {
  components: {
    Swiper,
    Categories,
    News
  }
}
</script>
