<template>
  <v-app>
    <v-content>
      <NavBar/>
    </v-content>
  </v-app>
     
</template>

<script>
import NavBar from './NavBar';
import Footer from './Footer';


export default {
  name: 'Profile',
  components: {
    NavBar,
    Footer
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
