<template>
  <v-app>
    <v-content>
      <NavBarLogged />
      <section id = 'white' style="padding-top: 50px">
        <center>
          <h1 class="black--text mb-2 display-1 text-center">
              Perfil
              </h1>
          <img src="../assets/perfil.png">
        </center>
        </section>
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
