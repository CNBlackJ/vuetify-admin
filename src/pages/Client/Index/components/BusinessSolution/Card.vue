<template>
  <v-card>
    <v-img
      :src="img"
      :lazy-src="`https://picsum.photos/10/6?image=${Math.floor(Math.random() * 100) + 1}`"
      height="100%"
      width="100%"
    >
    </v-img>

    <v-card-title primary-title class="text-md-center">
      <div style="width: 100%" class="headline">{{title}}</div>
    </v-card-title>

  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'it is a title'
    },
    img: String
  },
  data () {
    return {}
  }
}
</script>