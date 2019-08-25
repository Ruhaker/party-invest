<template>
  <v-app>
    <v-content>
      <NavBar/>
      <section>
        <div class="v-parallax" style="height: 200px; padding-bottom: 50px ; padding-top: 50px">
          <div class="v-parallax__content">
            <div class="layout white--text column align-center justify-center">
              <h1 class="white--text mb-2 display-1 text-center">
              Encontre um projeto
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section id="white">
        <input type="text" id="myInput" @keyup="Search()" placeholder="Procure por tags..." title="Digite uma tag">
        <button type="button" id="myButton" v-on:click="SearchMe()">Filtre pelas minhas tags!</button>
        <table id="myTable">

        <tr class="header">
            <th style="width:25%;">Projeto</th>
            <th style="width:60%;">Tags</th>
            <th style="width:10%;">Investido</th>
        </tr>
          <tr>
          <td>Análise probabiliśitica de eventos fatais</td>
          <td><p class="tag">IoT</p> <p class="tag">Desenvolvimento</p> <p class="tag">Mobilidade</p> <p class="tag">Esporte</p> <p class="tag">Machine learning</p> <p class="tag">UFPR <p class="tag">UFSM</p> </p></td>
          <td>16%</td>
        </tr>
        <tr>
          <td>IoT acessível e democrático</td>
          <td><p class="tag">Psicologia</p> <p class="tag">Desenvolvimento</p> <p class="tag">IoT</p> <p class="tag">Python</p> <p class="tag">Geografia</p> <p class="tag">UFSM <p class="tag">UFPR</p> </p></td>
          <td>1%</td>
        </tr>
        <tr>
          <td>Educação Popular Acessível e Democrática</td>
          <td><p class="tag">IoT</p> <p class="tag">Doenças</p> <p class="tag">Biologia</p> <p class="tag">Matemática</p> <p class="tag">C</p> <p class="tag">UNESP <p class="tag">UFPE</p> </p></td>
          <td>30%</td>
        </tr>
        <tr>
          <td>Camapnha de Vacinação</td>
          <td><p class="tag">IoT</p> <p class="tag">Maratona</p> <p class="tag">Esporte</p> <p class="tag">Educação</p> <p class="tag">Física</p> <p class="tag">UFRJ <p class="tag">UFRJ</p> </p></td>
          <td>63%</td>
        </tr>
        <tr>
          <td>Proteínas, Açucares e Gorduras</td>
          <td><p class="tag">Educação</p> <p class="tag">Computação</p> <p class="tag">IoT</p> <p class="tag">História</p> <p class="tag">Doenças</p> <p class="tag">UFCE <p class="tag">UFSCAR</p> </p></td>
          <td>40%</td>
        </tr>
        <tr>
          <td>Reformulação da sada de computação do CCM</td>
          <td><p class="tag">Competição</p> <p class="tag">Doenças</p> <p class="tag">Esporte</p> <p class="tag">História</p> <p class="tag">Evento</p> <p class="tag">UFRJ <p class="tag">UNESP</p> </p></td>
          <td>49%</td>
        </tr>
        <tr>
          <td>Congresso Paulo Leal Ferreira de Física</td>
          <td><p class="tag">Extensão</p> <p class="tag">Desenvolvimento</p> <p class="tag">Psicologia</p> <p class="tag">Octave</p> <p class="tag">Competição</p> <p class="tag">UFRJ <p class="tag">UFSM</p> </p></td>
          <td>81%</td>
        </tr>
        <tr>
          <td>Grafeno: material do futuro</td>
          <td><p class="tag">Octave</p> <p class="tag">Machine learning</p> <p class="tag">Maratona</p> <p class="tag">Matemática</p> <p class="tag">Engenharia</p> <p class="tag">UFF <p class="tag">UFAM</p> </p></td>
          <td>11%</td>
        </tr>
        <tr>
          <td>Novas ligas metálicas para uso industrial</td>
          <td><p class="tag">Psicologia</p> <p class="tag">Matemática</p> <p class="tag">Extensão</p> <p class="tag">Esporte</p> <p class="tag">Octave</p> <p class="tag">UFPE <p class="tag">UFCE</p> </p></td>
          <td>73%</td>
        </tr>
        <tr>
          <td>Cantina popular</td>
          <td><p class="tag">Computação</p> <p class="tag">Psicologia</p> <p class="tag">História</p> <p class="tag">Octave</p> <p class="tag">Desenvolvimento</p> <p class="tag">UNESP <p class="tag">UFCE</p> </p></td>
          <td>3%</td>
        </tr>
        <tr>
          <td>Comprar Cafezinho</td>
          <td><p class="tag">Machine learning</p> <p class="tag">Octave</p> <p class="tag">Maratona</p> <p class="tag">Extensão</p> <p class="tag">Python</p> <p class="tag">UFPR <p class="tag">UNICAMP</p> </p></td>
          <td>21%</td>
        </tr>
        <tr>
          <td>Financiar nova sala para o Carlinhos</td>
          <td><p class="tag">Química</p> <p class="tag">Geografia</p> <p class="tag">Educação</p> <p class="tag">Competição</p> <p class="tag">Machine learning</p> <p class="tag">UFSM <p class="tag">UFMA</p> </p></td>
          <td>28%</td>
        </tr>
        <tr>
          <td>Eu amo hackaton</td>
          <td><p class="tag">Extensão</p> <p class="tag">Ciência</p> <p class="tag">Educação</p> <p class="tag">Engenharia</p> <p class="tag">C</p> <p class="tag">UFF <p class="tag">UFSM</p> </p></td>
          <td>86%</td>
        </tr>
        <tr>
          <td>Análise probabiliśitica de eventos fatais</td>
          <td><p class="tag">Geografia</p> <p class="tag">Mobilidade</p> <p class="tag">IoT</p> <p class="tag">Simulação</p> <p class="tag">História</p> <p class="tag">UFSCAR <p class="tag">UFAM</p> </p></td>
          <td>16%</td>
        </tr>
        <tr>
          <td>IoT acessível e democrático</td>
          <td><p class="tag">IoT</p> <p class="tag">Machine learning</p> <p class="tag">Maratona</p> <p class="tag">História</p> <p class="tag">Química</p> <p class="tag">USP <p class="tag">UFAM</p> </p></td>
          <td>47%</td>
        </tr>
        <tr>
          <td>Educação Popular Acessível e Democrática</td>
          <td><p class="tag">Engenharia</p> <p class="tag">Saúde</p> <p class="tag">Psicologia</p> <p class="tag">Mobilidade</p> <p class="tag">Física</p> <p class="tag">UFRJ <p class="tag">UFRJ</p> </p></td>
          <td>71%</td>
        </tr>
        <tr>
          <td>Camapnha de Vacinação</td>
          <td><p class="tag">Física</p> <p class="tag">Doenças</p> <p class="tag">Competição</p> <p class="tag">Desenvolvimento</p> <p class="tag">Python</p> <p class="tag">UFSCAR <p class="tag">UFSM</p> </p></td>
          <td>0%</td>
        </tr>
        <tr>
          <td>Proteínas, Açucares e Gorduras</td>
          <td><p class="tag">Competição</p> <p class="tag">Python</p> <p class="tag">Doenças</p> <p class="tag">C++</p> <p class="tag">Engenharia</p> <p class="tag">UNICAMP <p class="tag">UNESP</p> </p></td>
          <td>75%</td>
        </tr>
        <tr>
          <td>Reformulação da sada de computação do CCM</td>
          <td><p class="tag">Mobilidade</p> <p class="tag">Machine learning</p> <p class="tag">Geografia</p> <p class="tag">Matemática</p> <p class="tag">Educação</p> <p class="tag">UFSCAR <p class="tag">UFSCAR</p> </p></td>
          <td>8%</td>
        </tr>
        <tr>
          <td>Congresso Paulo Leal Ferreira de Física</td>
          <td><p class="tag">C++</p> <p class="tag">Desenvolvimento</p> <p class="tag">Evento</p> <p class="tag">Simulação</p> <p class="tag">Doenças</p> <p class="tag">UFCE <p class="tag">USP</p> </p></td>
          <td>80%</td>
        </tr>
        <tr>
          <td>Grafeno: material do futuro</td>
          <td><p class="tag">Doenças</p> <p class="tag">Competição</p> <p class="tag">Simulação</p> <p class="tag">Biologia</p> <p class="tag">Arte</p> <p class="tag">UFSM <p class="tag">UFPE</p> </p></td>
          <td>94%</td>
        </tr>
        <tr>
          <td>Novas ligas metálicas para uso industrial</td>
          <td><p class="tag">Evento</p> <p class="tag">Desenvolvimento</p> <p class="tag">Ciência</p> <p class="tag">C</p> <p class="tag">Doenças</p> <p class="tag">UFPR <p class="tag">UFCE</p> </p></td>
          <td>52%</td>
        </tr>
        <tr>
          <td>Cantina popular</td>
          <td><p class="tag">Machine learning</p> <p class="tag">Mobilidade</p> <p class="tag">Desenvolvimento</p> <p class="tag">Engenharia</p> <p class="tag">Evento</p> <p class="tag">UFAM <p class="tag">UFMA</p> </p></td>
          <td>17%</td>
        </tr>
        <tr>
          <td>Comprar Cafezinho</td>
          <td><p class="tag">Ciência</p> <p class="tag">História</p> <p class="tag">Física</p> <p class="tag">Arte</p> <p class="tag">Matemática</p> <p class="tag">UFRJ <p class="tag">UFSM</p> </p></td>
          <td>93%</td>
        </tr>
        <tr>
          <td>Financiar nova sala para o Carlinhos</td>
          <td><p class="tag">C++</p> <p class="tag">Mobilidade</p> <p class="tag">Evento</p> <p class="tag">Extensão</p> <p class="tag">Esporte</p> <p class="tag">UFCE <p class="tag">UFF</p> </p></td>
          <td>5%</td>
        </tr>
        <tr>
          <td>Eu amo hackaton</td>
          <td><p class="tag">C++</p> <p class="tag">Esporte</p> <p class="tag">Maratona</p> <p class="tag">Desenvolvimento</p> <p class="tag">Ciência</p> <p class="tag">UFSM <p class="tag">USP</p> </p></td>
          <td>5%</td>
        </tr>
      </table>
      </section>
      <Footer/>
    </v-content>
  </v-app>
     
</template>

<script>
import NavBar from './NavBar';
import Footer from './Footer';



function Search() {
  var input, filter, table, tr, td, i, j, txtValue, bool;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase().split(" ");
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      bool = true;
      for (j = 0; j < filter.length; j++) {
        if (txtValue.toUpperCase().indexOf(filter[j]) == -1) {
          bool = false;
        }
      }
      if (bool == true) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }       
  }
}
function SearchMe() {
  var filter, table, tr, td, i, j, txtValue, bool;
  filter = ['USP','UFMG']
  
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
  
      txtValue = td.textContent || td.innerText;
  
      bool = false;
  
      for (j = 0; j < filter.length; j++) {
        if (txtValue.toUpperCase().indexOf(filter[j]) > -1) {
          bool = true;
        }
      }
      if (bool == true) {
        tr[i].style.display = "";
      }
      else {
        tr[i].style.display = "none";
      }
    }       
  }
}


export default {
  name: 'FindInvestor',
  components: {
    NavBar,
    Footer
  },
  methods: {
    Search,
    SearchMe
  },
  data: () => ({
    //
  }),
};

</script>

<style>
  * {
    box-sizing: border-box;
  }

  #myButton {
    width: 20%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }

  #myInput {
    background-image: url('../assets/search.png');
    background-position: 10px 10px;
    background-repeat: no-repeat;
    width: 80%;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
  }

  #myTable {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ddd;
    font-size: 18px;
  }

  #myTable th, #myTable td {
    text-align: left;
    padding: 12px;
  }

  #myTable tr {
    border-bottom: 1px solid #ddd;
  }

  #myTable tr.header, #myTable tr:hover {
    background-color: #f1f1f1;
  }

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
