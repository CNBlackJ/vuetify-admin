<template>
  <v-layout row wrap align-center id="counter">
    <v-text-field
      v-model="counter"
      type="number"
      :label="label"
      :required="required"
      append-outer-icon="add"
      @click:append-outer="onInsCounter"
      prepend-icon="remove"
      @click:prepend="onDesCounter">
    </v-text-field>
  </v-layout>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'Number'
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      counter: 1
    }
  },
  methods: {
    onInsCounter () {
      this.counter++
    },
    onDesCounter () {
      this.counter--
    }
  }
}
</script>

<style>
  #counter input {
    text-align: center;
  }
</style>