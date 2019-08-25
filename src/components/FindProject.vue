<template>
  <v-app>
    <v-content>
      <NavBar/>
      <section>
        <div class="v-parallax" style="height: 200px; padding-bottom: 50px ; padding-top: 50px">
          <div class="v-parallax__content">
            <div class="layout white--text column align-center justify-center">
              <h1 class="white--text mb-2 display-1 text-center">
              Encontre um investimento
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
            <th style="width:50%;">Projeto</th>
            <th style="width:60%;">Tags</th>
            <th style="width:10%;">Investido</th>
        </tr>
      
          <tr>
              <td>Análise de biomas do sul</td>
              <td>Ciência, Biologia, UFSM</td>
              <td>77% </td>
          </tr>
          <tr>
              <td>SeqPy: algoritmo sequenciador de genomas</td>
              <td>Ciência, Biologia, Computação, UFRJ</td>
              <td>110% </td>
          </tr>
        <tr>
              <td>Otmização Combinatória: treoria, formulação e aplicações</td>
              <td>Ciência, Computação, Matemática, USP</td>
              <td>0% </td>
          </tr>
          <tr>
              <td>Desmistificação do apredizado de máquina</td>
              <td>Ciência, Computação, Machine Learning, USP</td>
              <td>130% </td>
          </tr>
        
        <tr>
              <td>Seletiva USP Maratona de Programação</td>
              <td>Extensão, Evento, Competição, USP</td>
              <td>90% </td>
          </tr>
          <tr>
              <td>Club de Foguetes </td>
              <td>Extensão,  Competição, UFABC</td>
              <td>75% </td>
          </tr>
          <tr>
              <td>Corrida Universitária</td>
              <td>Extensão, Saúde, Sports, UFJF</td>
              <td>42% </td>
          </tr>
        <tr>
              <td>Simulação ONU</td>
              <td>Extensão, Relações Internacionais, Simulação, ONU, UFPE</td>
              <td>33% </td>
          </tr>
        <tr>
              <td>Cursinho Popular</td>
              <td>Educação, Social, UFRJ</td>
              <td>19% </td>
          </tr>

        <tr>
              <td>Estudo de Células de engergia baseadas em hidrogênio</td>
              <td>Ciência, Energias Alternativas, Sustentável, UFF</td>         
              <td>52% </td>
          </tr>
          <tr>
              <td>Workshop de HTML</td>
              <td>Educação, Computação, Workshop, HTML, Web Devopment, UNIRIO</td>
              <td>4% </td>
          </tr>
          <tr>
          <td>Análise probabiliśitica de eventos fatais</td>
          <td>Ciência, Geografia, Simulação, Computação, Física, UNICAMP, UFF</td>
          <td>92%</td>
        </tr>
        <tr>
          <td>IoT acessível e democrático</td>
          <td>IoT, Saúde, Python, Engenharia, C++, UFCE, UFMG</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>Educação Popular Acessível e Democrática</td>
          <td>Competição, Machine learning, Arte, C, Ciência, UNESP, UFMA</td>
          <td>61%</td>
        </tr>
        <tr>
          <td>Camapnha de Vacinação</td>
          <td>C, Engenharia, Doenças, Física, Simulação, UFSM, UFCE</td>
          <td>49%</td>
        </tr>
        <tr>
          <td>Proteínas, Açucares e Gorduras</td>
          <td>Extensão, Simulação, IoT, Octave, Evento, UFF, UFF</td>
          <td>57%</td>
        </tr>
        <tr>
          <td>Reformulação da sada de computação do CCM</td>
          <td>Matemática, IoT, Arte, Octave, Simulação, UFF, UFSM</td>
          <td>27%</td>
        </tr>
        <tr>
          <td>Congresso Paulo Leal Ferreira de Física</td>
          <td>Python, Desenvolvimento, Ciência, Computação, Arte, UFRJ, UNESP</td>
          <td>72%</td>
        </tr>
        <tr>
          <td>Grafeno: material do futuro</td>
          <td>Ciência, Saúde, Matemática, C++, Física, UFAM, UFAM</td>
          <td>34%</td>
        </tr>
        <tr>
          <td>Novas ligas metálicas para uso industrial</td>
          <td>Doenças, Octave, C++, Ciência, Simulação, UFCE, UFAM</td>
          <td>28%</td>
        </tr>
        <tr>
          <td>Cantina popular</td>
          <td>Ciência, Psicologia, Desenvolvimento, Python, Saúde, UFCE, UFPE</td>
          <td>8%</td>
        </tr>
        <tr>
          <td>Comprar Cafezinho</td>
          <td>Competição, Física, Matemática, C++, Geografia, UFPE, UFF</td>
          <td>1%</td>
        </tr>
        <tr>
          <td>Financiar nova sala para o Carlinhos</td>
          <td>Engenharia, Física, Octave, História, Doenças, USP, UFSCAR</td>
          <td>71%</td>
        </tr>
        <tr>
          <td>Eu amo hackaton</td>
          <td>IoT, Arte, Física, Machine learning, Engenharia, UNICAMP, UFMG</td>
          <td>24%</td>
        </tr>
        <tr>
          <td>Análise probabiliśitica de eventos fatais</td>
          <td>Saúde, Psicologia, Desenvolvimento, Educação, História, UFCE, UNICAMP</td>
          <td>74%</td>
        </tr>
        <tr>
          <td>IoT acessível e democrático</td>
          <td>Evento, Octave, História, Química, Competição, UFPR, UFAM</td>
          <td>17%</td>
        </tr>
        <tr>
          <td>Educação Popular Acessível e Democrática</td>
          <td>Mobilidade, Saúde, Machine learning, Psicologia, Química, UFPE, UFSM</td>
          <td>31%</td>
        </tr>
        <tr>
          <td>Camapnha de Vacinação</td>
          <td>Educação, Física, C, Maratona, Esporte, USP, USP</td>
          <td>90%</td>
        </tr>
        <tr>
          <td>Proteínas, Açucares e Gorduras</td>
          <td>Octave, Saúde, Educação, Evento, Doenças, UFSM, UFCE</td>
          <td>36%</td>
        </tr>
        <tr>
          <td>Reformulação da sada de computação do CCM</td>
          <td>História, Python, Maratona, Engenharia, Doenças, UFAM, UFF</td>
          <td>44%</td>
        </tr>
        <tr>
          <td>Congresso Paulo Leal Ferreira de Física</td>
          <td>Esporte, C++, Saúde, Biologia, Mobilidade, UFCE, UFMG</td>
          <td>20%</td>
        </tr>
        <tr>
          <td>Grafeno: material do futuro</td>
          <td>Octave, Engenharia, Mobilidade, Doenças, Maratona, UFRJ, UFSM</td>
          <td>89%</td>
        </tr>
        <tr>
          <td>Novas ligas metálicas para uso industrial</td>
          <td>Esporte, Química, Evento, Extensão, Biologia, UNICAMP, UFSM</td>
          <td>36%</td>
        </tr>
        <tr>
          <td>Cantina popular</td>
          <td>Maratona, Engenharia, C++, Simulação, Arte, UFSCAR, UFCE</td>
          <td>82%</td>
        </tr>
        <tr>
          <td>Comprar Cafezinho</td>
          <td>Evento, Arte, Saúde, Biologia, Doenças, UFCE, UFAM</td>
          <td>7%</td>
        </tr>
        <tr>
          <td>Financiar nova sala para o Carlinhos</td>
          <td>IoT, Química, Maratona, Engenharia, Octave, UFF, UFPE</td>
          <td>31%</td>
        </tr>
        <tr>
          <td>Eu amo hackaton</td>
          <td>Educação, Extensão, Competição, Ciência, Doenças, UFMG, UFPR</td>
          <td>81%</td>
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
    width: 79.73%;
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
