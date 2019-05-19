<template>
  <v-container grid-list-xl class="pa-0">
    <v-layout justify-center align-center>
      <v-flex class="display-2 font-weight-light text-md-center py-5" :class="{ 'display-1': $vuetify.breakpoint.xs }">
        FACTORY DIRECT PRICE
      </v-flex>
    </v-layout>

    <p class="text-md-center">
      Lowest factory direct prices with High quality product help you make big profit!
    </p>

    <v-layout row wrap>
      <v-flex>
        <v-hover>
          <v-img
            slot-scope="{ hover }"
            src="https://picsum.photos/id/85/1000/400"
            :lazy-src="`https://picsum.photos/10/6?image=${Math.floor(Math.random() * 100) + 1}`"
            height="100%"
            width="100%"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out darken-2 image-hover display-3 white--text"
                style="height: 100%;"
              >
                <v-layout class="image-btn" align-center justify-center row>
                  <v-btn style="z-index: 10" color="primary">GET FACTORY PRICE NOW</v-btn>
                </v-layout>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<style lang="scss" scoped>
  .image-hover {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
    background-color: #efefef;
    .image-btn {
      opacity: 1;
    }
  }
</style>
