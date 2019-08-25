<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>party invest</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/FindInvestor">Patrocinadores</v-btn>
        <v-btn text to="/FindProject">Projetos</v-btn>

        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              v-on="on"
              color="success"
            >
            <v-icon left>mdi-account-circle</v-icon>
              Ciências M.
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              v-onclick=""
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>


        
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
  name: 'vuetify',
  data: () => ({
      items: [
        { title: 'Meus projetos' },
        { title: 'Incluir Projeto' },
        { title: 'Perfil' }
      ],
    }),
}
</script>
