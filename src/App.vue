<template>
    <router-view></router-view>
</template>

<script>
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home'
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Home
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
