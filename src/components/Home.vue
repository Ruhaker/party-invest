<template>
	<v-app>
    <v-content>
      <NavBar />
      <section>
        <div class="v-parallax" style="height: 600px; padding-bottom: 50px ">
          <div class="v-parallax__content">
            <img src="../assets/logo.png" alt="logo.png" id="logo">
            <div class="layout white--text column align-center justify-center">
              <h1 class="white--text mb-2 display-1 text-center">
              Conectando empresas à pesquisa e extensão
              </h1>
              <div class="subheading mb-4 text-center">
              Construa mais junto com o incentivo privado
              </div>
              <div class="">
                <a href="#" class="mt-12 v-btn v-btn--contained theme--dark v-size--large blue lighten-2">
                <span class="v-btn__content">
                Registre-se como financiad@
                </span>
                </a>
                &nbsp;
                <a href="#" class="mt-12 v-btn v-btn--contained theme--dark v-size--large blue lighten-2">
                <span class="v-btn__content">
                Registre-se como financiad@r
                </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="white" style="padding-top: 150px; height: 600px">
        <div class="layout column wrap align-center">
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
                        <img src="../assets/transparencia.png">
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
                        <img src="../assets/git.png">
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
      <section>
        <div class="v-parallax" style="height: 800px; padding-bottom: 200px; padding-top: 200px">
          <div class="v-parallax__content">
            <center>
            <h1 class="white--text mb-2 display-1 text-center">
              Como funciona?
              </h1>
            <div style="padding-bottom: 30px"></div>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/dtRimW6_U_4"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
          </div>
        </div>
      </section>
      <section id="white">
        <div class="v-parallax" style="height: 500px;">
          <div class="v-parallax__content">
            <div class="layout column align-center justify-center">
              <h1 class="black--text mb-2 display-1 text-center">
              Nossos maiores patrocinadores
              </h1>
              <center>
                <img src="../assets/empresas_logo.png">
              </center>
            </div>
              <h1 class="black--text mb-2 display-1 text-center">
                Conecte-se com nós
              </h1>
              &nbsp;
              <center>
              <a href="https://github.com/Ruhaker/party-invest">
              <img border="0" alt="W3Schools" src="../assets/github_icon.png" width="75" height="75">
              </a>
              &nbsp;&nbsp;&nbsp;<img border="0" alt="W3Schools" src="../assets/facebook_icon.png" width="75" height="75"> &nbsp;&nbsp;&nbsp;
              <img border="0" alt="W3Schools" src="../assets/twiter_icon.png" width="75" height="75"> &nbsp;&nbsp;&nbsp;
              <img border="0" alt="W3Schools" src="../assets/youtube_icon.png" width="75" height="75"> &nbsp;&nbsp;&nbsp;
              <img border="0" alt="W3Schools" src="../assets/linkedin_icon.png" width="75" height="75"> &nbsp;&nbsp;&nbsp;
              </center>
              <div style="padding-bottom: 50px"></div>
            </div>
          </div>
      </section>
      <Footer />
    </v-content>
  </v-app>
</template>


<script>
import NavBar from './NavBar';
import Footer from './Footer';

export default {
  name: 'Home',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    //
  }),
};

</script>
