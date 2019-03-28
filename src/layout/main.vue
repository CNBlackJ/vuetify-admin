<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn :href="source" icon large target="_blank" v-on="on">
              <v-icon large>code</v-icon>
            </v-btn>
          </template>
          <span>Source</span>
        </v-tooltip>
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn icon large href="https://codepen.io/johnjleider/pen/EQOYVV" target="_blank" v-on="on">
              <v-icon large>mdi-codepen</v-icon>
            </v-btn>
          </template>
          <span>Codepen</span>
        </v-tooltip>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  props: {
    source: String
  }
}
</script>
