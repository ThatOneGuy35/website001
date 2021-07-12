<template>
<v-app class="grey">
    <v-main class="grey lighten-4">
      <Navbar />
      <router-view/>
    </v-main>
</v-app>

</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  },
  data: () => ({
    //
  }),
  created() {

  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Vehicles" || this.$route.name === "Admin")
        console.log('The check for the route has been successfully completed')
    },
  },
};
</script>
