<template>
  <div>
    <v-toolbar>
      <v-btn to="/Logged">
        <v-toolbar-title>party invest</v-toolbar-title>
      </v-btn>
      <div class="flex-grow-1"></div>

      <v-toolbar-items>
        <v-btn text to="/FindInvestorLogged">Patrocinadores</v-btn>
        <v-btn text to="/FindProjectLogged">Projetos</v-btn>

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
            <v-btn text to="/IncludeProjectLogged">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-btn>
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
