<template>
  <v-app>
    <v-content>
      <NavBarLogged />
        <center>
          <img src="../assets/perfil.png">
        </center>
    </v-content>
  </v-app>
</template>

<script>
import NavBarLogged from './NavBarLogged';

export default {
  name: 'Profile',
  components: {
    NavBarLogged
  }
};

</script>

<style>

</style>
