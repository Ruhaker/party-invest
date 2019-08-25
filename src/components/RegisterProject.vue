<template>
  <v-app>
    <v-content>
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-card 
              max-width="344"
              class="mx-auto"
            >
              <v-card-title>Incluir projeto</v-card-title>
              <v-card-text>
                <v-text-field
                  label="Título"
                  placeholder="meu projeto"
                ></v-text-field>
                <v-text-field
                  label="Tags"
                  placeholder="Ciência, Música"
                ></v-text-field>
                <v-text-field
                  label="Investimento"
                  placeholder="300.00"
                ></v-text-field>
                <v-text-field
                  label="Resumo"
                  placeholder="parágrafo resumido"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <router-link to="/profile">
                  <v-btn text>Incluir</v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'RegisterProject',
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
