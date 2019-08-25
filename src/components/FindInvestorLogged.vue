<template>
  <v-app>
    <v-content>
      <NavBarLogged />
      <section>
        <div class="v-parallax" style="height: 200px; padding-bottom: 50px ; padding-top: 50px">
          <div class="v-parallax__content">
            <div class="layout white--text column align-center justify-center">
              <h1 class="white--text mb-2 display-1 text-center">
              Encontre um patrocínio
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
              <th style="width:25%;">Investidor(a)</th>
              <th style="width:60%;">Tags</th>
              <th style="width:10%;">Avaliação</th>
          </tr>
          <tr>
  <td>B2W</td>
  <td><p class="tag">Python </p> <p class="tag">Física </p> <p class="tag">Maratona </p> <p class="tag">Ciências </p> <p class="tag">Geografia </p> <p class="tag">UFSM <p class="tag">UFSM</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Ipiranga</td>
  <td><p class="tag">Engenharia </p> <p class="tag">Arte </p> <p class="tag">Matemática </p> <p class="tag">História </p> <p class="tag">Química </p> <p class="tag">UNICAMP <p class="tag">UFPR</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Nubank</td>
  <td><p class="tag">Arte </p> <p class="tag">Biologia </p> <p class="tag">Geografia </p> <p class="tag">Saúde </p> <p class="tag">Matemática </p> <p class="tag">UFF <p class="tag">UFSCAR</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Neon</td>
  <td><p class="tag">IoT </p> <p class="tag">Educação </p> <p class="tag">Interdisciplinar </p> <p class="tag">Geografia </p> <p class="tag">Competição </p> <p class="tag">UFPR <p class="tag">UFMG</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Facebook</td>
  <td><p class="tag">Octave </p> <p class="tag">Arte </p> <p class="tag">Simulação </p> <p class="tag">Python </p> <p class="tag">Mobilidade </p> <p class="tag">UFAM <p class="tag">UNICAMP</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Vtex</td>
  <td><p class="tag">C </p> <p class="tag">Interdisciplinar </p> <p class="tag">Computação </p> <p class="tag">História </p> <p class="tag">Simulação </p> <p class="tag">UNESP <p class="tag">UFPR</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Cobli</td>
  <td><p class="tag">Esporte </p> <p class="tag">Maratona </p> <p class="tag">Interdisciplinar </p> <p class="tag">Computação </p> <p class="tag">Saúde </p> <p class="tag">UFSCAR <p class="tag">UFMA</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Ifood</td>
  <td><p class="tag">Doenças </p> <p class="tag">Competição </p> <p class="tag">Octave </p> <p class="tag">Extensão </p> <p class="tag">IoT </p> <p class="tag">UFCE <p class="tag">UFSM</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Uber</td>
  <td><p class="tag">Psicologia </p> <p class="tag">Computação </p> <p class="tag">Extensão </p> <p class="tag">C </p> <p class="tag">Engenharia </p> <p class="tag">UFCE <p class="tag">UFAM</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Grin</td>
  <td><p class="tag">C++ </p> <p class="tag">Geografia </p> <p class="tag">Computação </p> <p class="tag">IoT </p> <p class="tag">Interdisciplinar </p> <p class="tag">UFAM <p class="tag">UFPE</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>
<tr>
  <td>Manaus SA</td>
  <td><p class="tag">Computação </p> <p class="tag">Machine learning </p> <p class="tag">Química </p> <p class="tag">Extensão </p> <p class="tag">Mobilidade </p> <p class="tag">UFCE <p class="tag">UNICAMP</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Pernambucanas</td>
  <td><p class="tag">Química </p> <p class="tag">Computação </p> <p class="tag">História </p> <p class="tag">Simulação </p> <p class="tag">Arte </p> <p class="tag">UFMG <p class="tag">UFRJ</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>
<tr>
  <td>Açaí</td>
  <td><p class="tag">Python </p> <p class="tag">Esporte </p> <p class="tag">Desenvolvimento </p> <p class="tag">C </p> <p class="tag">IoT </p> <p class="tag">UFCE <p class="tag">UFSM</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Lenovo</td>
  <td><p class="tag">Geografia </p> <p class="tag">Saúde </p> <p class="tag">Simulação </p> <p class="tag">Interdisciplinar </p> <p class="tag">Python </p> <p class="tag">UFRJ <p class="tag">UNESP</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Leve</td>
  <td><p class="tag">Matemática </p> <p class="tag">Ciências </p> <p class="tag">Python </p> <p class="tag">C </p> <p class="tag">Extensão </p> <p class="tag">UFSCAR <p class="tag">UFMG</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>
<tr>
  <td>Curiosos</td>
  <td><p class="tag">Ciências </p> <p class="tag">Física </p> <p class="tag">Biologia </p> <p class="tag">C </p> <p class="tag">Arte </p> <p class="tag">UFRJ <p class="tag">UFMA</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>
<tr>
  <td>Coursera</td>
  <td><p class="tag">Desenvolvimento </p> <p class="tag">Física </p> <p class="tag">Computação </p> <p class="tag">Matemática </p> <p class="tag">Maratona </p> <p class="tag">UFMG <p class="tag">UFRJ</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Udemy</td>
  <td><p class="tag">Competição </p> <p class="tag">Física </p> <p class="tag">Evento </p> <p class="tag">Esporte </p> <p class="tag">C </p> <p class="tag">UNESP <p class="tag">UFPR</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Udacity</td>
  <td><p class="tag">Geografia </p> <p class="tag">Física </p> <p class="tag">IoT </p> <p class="tag">Computação </p> <p class="tag">Ciências </p> <p class="tag">UNESP <p class="tag">UFSCAR</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Mercurial</td>
  <td><p class="tag">Física </p> <p class="tag">IoT </p> <p class="tag">C </p> <p class="tag">Computação </p> <p class="tag">Simulação </p> <p class="tag">UFSCAR <p class="tag">UFPE</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Adidas</td>
  <td><p class="tag">Desenvolvimento </p> <p class="tag">Matemática </p> <p class="tag">Geografia </p> <p class="tag">Mobilidade </p> <p class="tag">Computação </p> <p class="tag">USP <p class="tag">UFCE</p></td>
  <td colspasn = 4><img src="../assets/star3.png" height="15"></td>
</tr>
<tr>
  <td>Coca Cola</td>
  <td><p class="tag">Educação </p> <p class="tag">Desenvolvimento </p> <p class="tag">Computação </p> <p class="tag">Octave </p> <p class="tag">Matemática </p> <p class="tag">UFRJ <p class="tag">UNICAMP</p></td>
  <td colspasn = 4><img src="../assets/star1.png" height="15"></td>
</tr>
<tr>
  <td>Burger King</td>
  <td><p class="tag">Evento </p> <p class="tag">Python </p> <p class="tag">Competição </p> <p class="tag">Arte </p> <p class="tag">IoT </p> <p class="tag">UFRJ <p class="tag">UFSM</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>
<tr>
  <td>Facebook</td>
  <td><p class="tag">Computação </p> <p class="tag">Interdisciplinar </p> <p class="tag">Educação </p> <p class="tag">Extensão </p> <p class="tag">Python </p> <p class="tag">UFSCAR <p class="tag">UFAM</p></td>
  <td colspasn = 4><img src="../assets/star2.png" height="15"></td>
</tr>

        </table>
      </section>
      <Footer/>
    </v-content>
  </v-app>
     
</template>

<script>
import NavBarLogged from './NavBarLogged';
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
  filter = ['USP','CIÊNCIAS', 'INTERDISCIPLINAR', 'BIOLOGIA']
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
  name: 'FindInvestorLogged',
  components: {
    NavBarLogged,
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
  
  body {
  font: 12px/1.5 'PT Sans', serif;
  margin: 25px;
}

.tags {
  list-style: none;
  margin: 0;
  overflow: visible; 
  padding: 0;
}

.tags li {
  float: left; 
}

.tag {
  background: #eee;
  border-radius: 3px 0 0 3px;
  color: #999;
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  -webkit-transition: color 0.2s;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: '';
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid #eee;
  border-top: 13px solid transparent;
  content: '';
  position: absolute;
  right: 0;
  top: 0;
}

</style>
