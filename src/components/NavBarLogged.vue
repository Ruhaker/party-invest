<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>party invest</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/FindInvestor">Patrocinadores</v-btn>
        <v-btn text to="/FindProject">Projetos</v-btn>
        <div> cm-admin </div>
        <template v-if="$vuetify.breakpoint.smAndUp">
          <v-btn icon to="/">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'vuetify'
}
</script>
