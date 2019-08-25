<template>
  <v-app>
    <v-content>
      <NavBar/>
      <section>
        <div class="v-parallax" style="height: 600px;">
          <div class="v-parallax__content">
            <img src="./assets/logo.png" alt="logo.png" id="logo">
            <div class="layout white--text column align-center justify-center">
              <h1 class="white--text mb-2 display-1 text-center">
              Conectando empresas à pesquisa e extensão
              </h1>
              <div class="subheading mb-4 text-center">
              Construa mais com o incentivo privado
              </div>
              <div class="">
                <a href="#" class="mt-12 v-btn v-btn--contained theme--dark v-size--large blue lighten-2">
                <span class="v-btn__content">
                Para financiados
                </span>
                </a>
                <a href="#" class="mt-12 v-btn v-btn--contained theme--dark v-size--large blue lighten-2">
                <span class="v-btn__content">
                Para financiadores
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="white">
        <div class="layout column wrap align-center">
          <div class="flex my-4 xs12 sm4">
            <div class="text-center">
              <h2 class="headline">
              The best way to start developing
              </h2> 
              <span class="subheading">
                Cras facilisis mi vitae nunc
              </span>
            </div>
          </div> 
            <div class="flex xs12">
              <div class="container grid-list-xl">
                <div class="layout row wrap align-center">
                  <div class="flex xs12 md4">
                    <div class="transparent v-card v-card--flat v-sheet theme--light">
                      <div class="v-card__text text-center">
                        <i aria-hidden="true" class="v-icon notranslate blue--text text--lighten-2 mdi mdi-palette theme--light" style="font-size: 40px;"></i>
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline text-center">
                        Material Design
                        </div>
                      </div>
                      <div class="v-card__text">
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </div>
                    </div>
                  </div> 
                  <div class="flex xs12 md4">
                    <div class="transparent v-card v-card--flat v-sheet theme--light">
                      <div class="v-card__text text-center">
                        <i aria-hidden="true" class="v-icon notranslate blue--text text--lighten-2 mdi mdi-flash theme--light" style="font-size: 40px;"></i>
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline">
                          Fast development
                        </div>
                      </div> 
                      <div class="v-card__text">
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </div>
                    </div>
                  </div> 
                  <div class="flex xs12 md4">
                    <div class="transparent v-card v-card--flat v-sheet theme--light">
                      <div class="v-card__text text-center">
                        <i aria-hidden="true" class="v-icon notranslate blue--text text--lighten-2 mdi mdi-flash theme--light" style="font-size: 40px;"></i>
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline">
                          Fast development
                        </div>
                      </div> 
                      <div class="v-card__text">
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
      <section id="white">
        <div class="v-parallax" style="height: 600px;">
          <div class="v-parallax__content">
            <div class="layout black--text column align-center justify-center">
              <h1 class="black--text mb-2 display-1 text-center">
              Empresas que patrocinam projetos
              </h1>
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
    width: 25%;
    height: 40%;
  }
  
</style>
