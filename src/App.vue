<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from './views/Layout/Header.vue';
import Footer from './views/Layout/Footer.vue';
export default {
  name: 'App',
  components: { Header, Footer },
  data: () => ({
    //
  }),
};
</script>
