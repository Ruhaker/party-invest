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
        <input type="text" id="myInput" onkeyup="Search()" placeholder="Procure por tags..." title="Digite uma tag">
        <button type="button" id="myButton" v-on:click="SearchMe()">Filtre pelas minhas tags!</button>
        <table id="myTable">
          <tr class="header">
              <th style="width:20%;">Investidor(a)</th>
              <th style="width:60%;">Tags</th>
              <th style="width:10%;">Avaliação</th>
          </tr>
          <tr>
            <td>Cobli</td>
            <td>Extensão, Engenharia, Geografia, Esporte, Mobilidade, UFSM, UNESP</td>
            <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
          </tr>
          <tr>
            <td>Ipiranga</td>
            <td>Física, IoT, Octave, Extensão, C++, UFRJ, UFRJ</td>
            <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
          </tr>
          <tr>
            <td>Nubank</td>
            <td>Doenças, Competição, Simulação, Desenvolvimento, Arte, UFMG, UNICAMP</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Neon</td>
            <td>Evento, Saúde, Arte, Doenças, IoT, UFAM, UFSCAR</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Química, Psicologia, Matemática, História, Desenvolvimento, UFMG, UNESP</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Vtex</td>
            <td>Saúde, Desenvolvimento, Simulação, Geografia, C, UFSM, UFSM</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>B2W</td>
            <td>Desenvolvimento, Saúde, Ciência, Simulação, Matemática, UFSM, UFPE</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Ifood</td>
            <td>Matemática, Ciência, Doenças, Maratona, Esporte, UFMA, UNESP</td>
            <td colspasn = 4><img src="../assets/star2.png" height=15></td>
          </tr>
          <tr>
            <td>Uber</td>
            <td>Educação, C, Arte, Saúde, Psicologia, UFMG, UFSCAR</td>
            <td colspasn = 4><img src="../assets/star2.png" height=15></td>
          </tr>
          <tr>
            <td>Grin</td>
            <td>Arte, Esporte, Doenças, Geografia, Computação, UFRJ, UFCE</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Manaus SA</td>
            <td>Esporte, Educação, Maratona, Evento, Machine learning, UFF, UFSM</td>
            <td colspasn = 4><img src="../assets/star2.png" height=15></td>
          </tr>
          <tr>
            <td>Pernambucanas</td>
            <td>História, Computação, Evento, Octave, C++, UFRJ, UFSCAR</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
          </tr>
          <tr>
            <td>Açaí</td>
            <td>Mobilidade, Geografia, Desenvolvimento, Arte, Octave, UFAM, UFCE</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
          </tr>
          <tr>
            <td>Lenovo</td>
            <td>Simulação, Extensão, Psicologia, IoT, Matemática, UFSM, UNESP</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Leve</td>
            <td>IoT, Octave, Desenvolvimento, Esporte, Computação, UFPE, UFSCAR</td>
            <td colspasn = 4><img src="../assets/star2.png" height=15></td>
          </tr>
          <tr>
            <td>Curiosos</td>
            <td>Computação, Doenças, Competição, Ciência, Educação, UFRJ, UFF</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
          </tr>
          <tr>
            <td>Coursera</td>
            <td>Esporte, IoT, Doenças, Educação, Mobilidade, UFSCAR, USP</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Udemy</td>
            <td>Evento, Doenças, Psicologia, Física, Matemática, UFAM, UFMA</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Udacity</td>
            <td>Octave, Geografia, Computação, Evento, IoT, UFPR, USP</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Mercurial</td>
            <td>Engenharia, Evento, Machine learning, Octave, História, UNESP, UFAM</td>
            <td colspasn = 4><img src="../assets/star3.png" height=15></td>
          </tr>
          <tr>
            <td>Adidas</td>
            <td>Evento, Matemática, Computação, C++, IoT, UFAM, UFSM</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
          </tr>
          <tr>
            <td>Coca Cola</td>
            <td>Psicologia, Evento, Saúde, Matemática, Simulação, UNICAMP, UFSM</td>
            <td colspasn = 4><img src="../assets/star2.png" height=15></td>
          </tr>
          <tr>
            <td>Burger King</td>
            <td>C, Psicologia, Geografia, Simulação, Saúde, UFRJ, USP</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
          </tr>
          <tr>
            <td>Facebook</td>
            <td>Doenças, Geografia, Arte, Python, Evento, UNESP, UFPE</td>
            <td colspasn = 4><img src="../assets/star1.png" height=15></td>
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


export default {
  name: 'FindInvestor',
  components: {
    NavBar,
    Footer
  },
  data: () => ({
    //
  }),
};

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
    width: 90%;
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
