<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          @click.stop="filterItem(item.title)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      clipped
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'All',
          to: '#all',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'T-Shirt',
          to: '#tshirt',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'Pants',
          to: '#pants',
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Golf wear'
    }
  },
  methods: {
    ...mapMutations({
        setKeyword: 'item/setKeyword'
    }),
    filterItem(e) {
      debugger;
      this.setKeyword(e);
    }
  }
}
</script>