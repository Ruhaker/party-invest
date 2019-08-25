<template>
  <div>
    <v-toolbar>
      <v-btn to="/">
        <v-toolbar-title>party invest</v-toolbar-title>
      </v-btn>
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/FindInvestor">Patrocinadores</v-btn>
        <v-btn text to="/FindProject">Projetos</v-btn>
        <v-btn text to="/login" exact>Login</v-btn>
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'vuetify'
}
</script>
