<template>
  <v-layout>
    <v-flex xs12 sm12>
      <v-card>
        <v-card-title>
          <span class="title font-weight-regular">
            {{title}}
          </span>
        </v-card-title>

        <v-divider></v-divider>

        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="(image, i) in images"
              :key="i"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="image.url"
                  :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
                  aspect-ratio="1"
                  class="grey lighten-2 elevation-1"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Image'
    },
    images: {
      type: Array,
      default: () => []
    }
  }
}
</script>