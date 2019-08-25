<template>
  <v-app>
    <v-content>
      <NavBarLogged />
      <section id="white" style="padding-top: 50px">
        <center>
          <h1 class="black--text mb-2 display-1 text-center">
              Workshop InovaUSP
              </h1>
        <img src="../assets/detalhes_projeto.png">   
        </center> 
      </section>
      <section id="white" style="padding-top: 50px; padding-bottom: 70px">
        <center>
          <h1 class="black--text mb-2 display-1 text-center">
              Patrocinadores
              </h1>
        <img src="../assets/patrocineos.png">   
        </center> 
      </section>
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
