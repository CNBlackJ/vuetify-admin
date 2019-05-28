<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in items">
        
        <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>

        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>

        <v-list-tile
          v-else
          :key="item.text"
          @click="$router.push({ path: item.path })">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawerStatus: Boolean
  },
  watch: {
    drawerStatus (val) {
      this.drawer = val
    }
  },
  data () {
    return {
      drawer: null,
      items: [
        { icon: 'contacts', text: 'Dashboard', path: '/admin/dashboard' },
        { icon: 'history', text: '首页配置', path: '/admin/pageconfig' },
        { icon: 'content_copy', text: '产品列表', path: '/admin/product' },
        { icon: 'settings', text: '询盘用户', path: '/admin/inquiry' },
        { icon: 'chat_bubble', text: '类别管理', path: '/admin/category' },
        { icon: 'help', text: '订单管理', path: '/admin/order' },
        { icon: 'phonelink', text: '定价管理', path: '/admin/price' },
        { icon: 'keyboard', text: '用户管理', path: '/admin/user' },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Labels',
          model: true,
          children: [
            { icon: 'add', text: 'Create label' }
          ]
        },
        {
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'More',
          model: false,
          children: [
            { text: 'Import' },
            { text: 'Export' },
            { text: 'Print' },
            { text: 'Undo changes' },
            { text: 'Other contacts' }
          ]
        }
      ]
    }
  }
}
</script>
