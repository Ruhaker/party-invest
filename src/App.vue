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
                        <i aria-hidden="true" class="v-icon notranslate blue--text text--lighten-2 mdi mdi-flash theme--light" style="font-size: 40px;"></i>
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline text-center">
                        Facilidade
                        </div>
                      </div>
                      <div class="v-card__text">
                        Em poucos passos você se registra e seus projetos serão enviados para investidores que pensam como você. Utilize as tags para classficar seu projetos e converse com os investidores que mais apoiam!
                      </div>
                    </div>
                  </div> 
                  <div class="flex xs12 md4">
                    <div class="transparent v-card v-card--flat v-sheet theme--light">
                      <div class="v-card__text text-center">
                        <img src="assets/transparencia.png">
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline">
                          Transparência
                        </div>
                      </div> 
                      <div class="v-card__text">
                        Administre e verba e declare gastos de forma simples e prática! Com nossa interface os gráficos são gerados em tempo real e as notas fiscais ficam armazenadas na nuvem, assim todos posdem acompanhar os gastos e resultados de forma públia e transparente.
                      </div>
                    </div>
                  </div> 
                  <div class="flex xs12 md4">
                    <div class="transparent v-card v-card--flat v-sheet theme--light">
                      <div class="v-card__text text-center">
                        <i aria-hidden="true" class="v-icon notranslate blue--text text--lighten-2 mdi mdi-palette theme--light" style="font-size: 40px;"></i>
                      </div> 
                      <div primary-title="" class="v-card__title layout justify-center">
                        <div class="headline">
                          Open Source
                        </div>
                      </div> 
                      <div class="v-card__text">
                        Uma plataforma de código aberto, e toda a comunidade, incluindo você, pode contribuir com o desenvolvimento do projeto.
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
