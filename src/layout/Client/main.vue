<template>
  <v-content id="main">
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
</template>

<style>
  #main {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
  }
</style>