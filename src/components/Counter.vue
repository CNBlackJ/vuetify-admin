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
  watch: {
    counter (val) {
      this.onEmitCounter(val)
    }
  },
  data () {
    return {
      counter: 1
    }
  },
  created () {
    this.onEmitCounter(this.counter)
  },
  methods: {
    onInsCounter () {
      this.counter++
    },
    onDesCounter () {
      this.counter--
    },
    onEmitCounter (counter) {
      this.$emit('updateCounter', counter)
    }
  }
}
</script>

<style lang="scss">
  #counter input {
    text-align: center;
  }
</style>
