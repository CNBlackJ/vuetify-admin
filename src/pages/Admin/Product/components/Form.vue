<template>
  <v-card>
    <v-card-title>
      <span class="headline">添加产品</span>
    </v-card-title>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout wrap>
          <v-flex xs12 sm12 md12>
            <v-text-field label="名称*" required></v-text-field>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <v-select
              :items="['0-17', '18-29', '30-54', '54+']"
              label="类别*"
              required
            ></v-select>
          </v-flex>
          <v-flex xs12 sm6 md6>
            <Counter :label="'价格*'"/>
          </v-flex>
        </v-layout>
      </v-container>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" flat @click="onClose">Close</v-btn>
      <v-btn color="blue darken-1" flat @click="onSave">Save</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Counter from '@/components/Counter'

export default {
  components: {
    Counter
  },
  methods: {
    onClose () {
      this.$emit('closeDialog', true)
    },
    onSave () {
      this.$emit('closeDialog', true)
    }
  }
}
</script>