<template>
  <v-app>
    <NavDrawer v-if="authenticated"></NavDrawer>
    <NavBar v-if="authenticated"></NavBar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NavDrawer from '@/components/NavDrawer.vue'
import { mapGetters } from 'vuex' 

export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    NavBar,
    NavDrawer
  },
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
    })
  }
};
</script>
