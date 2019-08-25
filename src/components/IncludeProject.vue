<template>
  <v-app>
    <v-content>
      <NavBarLogged />
      <div id="white">
        <center><h1 style="padding-top: 50px">Inclusão de projetos</h1></center>
        <img src="../assets/detalhes_projeto.png">    
      </div>
    </v-content>
  </v-app>
</template>

<script>
import NavBarLogged from './NavBarLogged';

export default {
  name: 'IncludeProject',
  components: {
    NavBarLogged
  }
};

</script>

<style>

</style>
