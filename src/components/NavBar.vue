<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>party invest</v-toolbar-title>

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
