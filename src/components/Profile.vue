<template>
  <v-app>
    <v-content>
      <NavBarLogged />
      
      <v-container class="white" bg fill-height grid-list-md text-xs-center>
        <v-row no-gutters>
          <v-col
            v-for="n in 3"
            :key="n"
            cols="sm"
          >
            <v-card
              class="pa-10"
              outlined
              tile
            >
              One of three columns
            </v-card>
          </v-col>
        </v-row>
      </v-container>

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
