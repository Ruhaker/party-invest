<template>
  <v-app>
    <v-content>
      <NavBar/>
        <v-card
          max-width="344"
          class="mx-auto"
        >
          <v-card-title>I'm a title</v-card-title>
          <v-card-text>I'm card text</v-card-text>
          <v-card-actions>
            <v-btn text>Click</v-btn>
          </v-card-actions>
        </v-card>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './NavBar';

export default {
  name: 'Profile',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
};

</script>

<style>
  .v-content{
    background-color: #03a5fc;
  }
  #white{
    background-color: white;
  }
  #logo{
    float: right;
    display: block;
    margin-left: auto;
    margin-right: auto;

  }
  
</style>
