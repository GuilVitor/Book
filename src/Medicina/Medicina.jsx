
 import './Medicina.css'


import EmbriologiaHumana from './EmbriologiaHumana/EmbriologiaHumana';
import Embriologia from './Embriologia/Embriologia';
import Cinesiologia from './Cinesiologia/Cinesiologia';
import GestacaodeAltoRisco from './GestaçãodeAltoRisco/GestaçãodeAltoRisco';
import SaudedaMulher from './SaudedaMulher/SaudedaMulher';


import ConceitosdeGenetica from './ConceitosGenetica/ConceitosdeGenetica';
import BularioVeterinario from './BularioVeterinario/BularioVeterinario';
import SaudeDoencasBrasil from './SaudeDoençasBrasil/SaudeDoencasBrasil';
import IntroducaoMedicina from './IntroducaoMedicina/IntroducaoMedicina';
import ArtigosCOVID19 from './Artigos COVID-19/ArtigosCOVID-19';





function Medicinaa(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Medicinadire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"MEDICINA"}</b> </h2> </div>

           <div className='container'>

           <div id='Medicina-containers1' className='containers'>

          <div id='Medicina-livro1' className='livro'><EmbriologiaHumana /></div>
          <div id='Medicina-livro1' className='livro'><Embriologia /> </div>
          <div id='Medicina-livro1' className='livro'><Cinesiologia /> </div>
          <div id='Medicina-livro1' className='livro'><GestacaodeAltoRisco /> </div> 
          <div id='Medicina-livro1' className='livro'><SaudedaMulher /> </div>
          </div>

          <div id='Medicina-containers2' className='containers2'>

          <div id='Medicina-livro2' className='livro2'><BularioVeterinario /></div>
          <div id='Medicina-livro2' className='livro2'><SaudeDoencasBrasil/></div>
          <div id='Medicina-livro2' className='livro2'><IntroducaoMedicina /></div>
          <div id='Medicina-livro2' className='livro2'><ConceitosdeGenetica/></div> 
          <div id='Medicina-livro2' className='livro2'><ArtigosCOVID19 /></div>
          </div>

          </div>
          <div  className='esq' onClick={Medicinaesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Medicinaesq2(){
    
      var mudar = document.getElementById('Medicina-containers1')
      var mudar2 = document.getElementById('Medicina-containers2')
      var livro2 = document.getElementById('Medicina-livro2')
      var livro1 = document.getElementById('Medicina-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Medicinadire2(){
    
      var mudar = document.getElementById('Medicina-containers2')
      var mudar2 = document.getElementById('Medicina-containers1')
      var livro2 = document.getElementById('Medicina-livro2')
      var livro1 = document.getElementById('Medicina-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Medicinaa;

  
  
          
   

  

  // const url = "https://appbluemusicguil.herokuapp.com/Destaque"


  // function buscarPartidas() {
  //   fetch(url)
  //   .then(resposta => {
  //     resposta.json()
  //     .then(obj => {
  //     mostrarPartidas(obj);
  //   })
  // })
  // .catch()
  // }
  // function mostrarPartidas(partidas) {
  //   console.log(partidas, "Isso é partidas")
  //     var placar = document.createElement('h3');
  //     placar.innerText = partidas.Destaque[4].Título;
  //     var escudoMandante = document.createElement('img');
  //     escudoMandante.setAttribute('src', partidas.Destaque[4].capa);
  //     document.getElementById('livros-destaque').append(placar, escudoMandante);
  //   }
  
  // buscarPartidas();
  
  