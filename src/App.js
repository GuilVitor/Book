import "./App.css"
import Menu from "./Navbar/Navbar";
import Imports from "./Imports";
import Destaque from "./Destaque/Destaque";
import Acao from "./Acao/Acao";
import Romance from "./Romance/Romance";
import Infantis from "./Infantis/Infantis";
import Cursos from "./Cursos/Cursos";
import Historia from "./Historia/Historia";
import Literaturaa from "./Literatura/Literatura";
import Medicinaa from "./Medicina/Medicina";
import Cordel from "./Cordel/Cordel";
import Religiao from "./Religiao/Religiao";


function App() {
  return (
   

  <div className="App">

    <Menu />
    <Destaque />
    <Acao />
    <Romance />
    <Infantis />
    <Cursos />
    <Historia />
    <Literaturaa />
    <Medicinaa />
    <Cordel />
    <Religiao />
    

    <Imports />

  </div>



  );
}

export default App;
