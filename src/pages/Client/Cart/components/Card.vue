<template>
  <v-container>
    <v-layout row wrap>
      <v-flex md3>
        <img src="https://picsum.photos/400/400?image=4">
      </v-flex>
      <v-flex md3>
        it is product name
        <br>
        it is size info
      </v-flex>
      <v-flex md3>
        it is price info
      </v-flex>
      <v-flex md3>
        10 pics
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      selected: false
    }
  }
}
</script>
