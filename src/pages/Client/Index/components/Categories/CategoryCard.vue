<template>
  <v-card @click="onClickCard">
    <v-img
      :src="img"
      :lazy-src="`https://picsum.photos/10/6?image=${Math.floor(Math.random() * 100) + 1}`"
      height="200px"
    >
      <v-container
        fill-height
        fluid
        pa-2
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" v-text="title"></span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>

    <v-card-title primary-title>
      <div class="headline">{{subTitle}}</div>
    </v-card-title>

  </v-card>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  methods: {
    onClickCard () {
      this.$router.push({
        path: '/products'
      })
    }
  }
}
</script>