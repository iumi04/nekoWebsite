<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
import vuetify from './plugins/vuetify'
import router from './router'; // Import the router

export default {
  name: 'App',
  vuetify,
  router,
};
</script>
