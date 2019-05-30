<template>
  <v-list two-line>
    <template v-for="(item, index) in items">
      <v-list-tile
        :key="item.title"
        avatar
        ripple
        @click="toggle(index)"
      >
        <v-list-tile-avatar>
          <img src="https://picsum.photos/400/400?image=4">
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
          <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-spacer></v-spacer>
          <v-checkbox></v-checkbox>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider
        v-if="index + 1 < items.length"
        :key="index"
      ></v-divider>
    </template>
  </v-list>
</template>

<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          {
            headline: '$ 20.00',
            title: 'Brunch this weekend?',
            subtitle: "size: small"
          },
          {
            headline: '$ 20.00',
            title: 'Summer BBQ 4',
            subtitle: "size: small"
          },
          {
            headline: '$ 20.00',
            title: 'Ali Connors',
            subtitle: "size: small"
          },
          {
            headline: '$ 20.00',
            title: 'Birthday gift',
            subtitle: "size: small"
          },
          {
            headline: '$ 20.00',
            title: 'Recipe to try',
            subtitle: "size: small"
          }
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>
