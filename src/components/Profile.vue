<template>
  <v-app>
    <v-content>
      <NavBar/>
      <section>
        <div class="v-parallax" style="height: 800px; padding-bottom: 200px; padding-top: 200px">
          <div class="v-parallax__content">
            <center>
            <div class="headline">
              Como funciona?
            </div>
            <div style="padding-bottom: 50px"></div>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/dtRimW6_U_4"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
          </div>
        </div>
      </section>
      <section id="white">
        <div class="v-parallax" style="height: 800px;">
          <div class="v-parallax__content">
            <div class="layout column align-center justify-center">
              <h1 class="black--text mb-2 display-1 text-center">
              Empresas que patrocinam projetos
              </h1>
                <v-container class="grey lighten-5">
                  <v-row
                    class="mb-6"
                    no-gutters
                  >
                    <v-col md="1">
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa1_logo.png">
                      </v-card>
                    </v-col>
                    <v-col
                      md="4"
                      offset-md="3"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa2_logo.png">
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-col
                      md="1"
                      offset-md="3"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa6_logo.png">
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row
                    class="mb-6"
                    no-gutters
                  >
                    <v-col
                      md="3"
                      offset-md="3"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa3_logo.png">
                      </v-card>
                    </v-col>
                    <v-col
                      md="3"
                      offset-md="3"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa4_logo.png">
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col
                      md="6"
                      offset-md="3"
                    >
                      <v-card
                        class="pa-2"
                        outlined
                        tile
                      >
                        <img src="./assets/empresa5_logo.png">
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';


export default {
  name: 'App',
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
