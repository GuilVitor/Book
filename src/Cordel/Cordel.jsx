
 import './Cordel.css'


import Sus from './Sus/Sus';
import CoxinhaMacaxeira from './CoxinhaMacaxeira/CoxinhaMacaxeira';


import Pistoleiros from './Pistoleiros/Pistoleiros';
import SalarioTerrivel from './SalarioTerrivel/SalarioTerrivel';
import Coronavírus from './Coronavírus/Coronavírus';
import NossosCordeis from './NossosCordeis/NossosCordeis';
import ForcaSuaEspera from './ForcaSuaEspera/ForcaSuaEspera';
import ProtecaooTestemunha from './ProtecaooTestemunha/ProtecaooTestemunha';
import HorasdeTerror from './HorasdeTerror/HorasdeTerror';
import LuaComanche from './LuaComanche/LuaComanche';





function Cordel(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Cordeldire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"CORDEL"}</b> </h2> </div>

           <div className='container'>

           <div id='Cordel-containers1' className='containers'>

          <div id='Cordel-livro1' className='livro'><Coronavírus /></div>
          <div id='Cordel-livro1' className='livro'><Sus /> </div>
          <div id='Cordel-livro1' className='livro'><NossosCordeis /> </div>
          <div id='Cordel-livro1' className='livro'><CoxinhaMacaxeira /> </div> 
          <div id='Cordel-livro1' className='livro'><ForcaSuaEspera /> </div>
          </div>

          <div id='Cordel-containers2' className='containers2'>

          <div id='Cordel-livro2' className='livro2'><Pistoleiros /></div>
          <div id='Cordel-livro2' className='livro2'><ProtecaooTestemunha /></div>
          <div id='Cordel-livro2' className='livro2'><HorasdeTerror/></div>
          <div id='Cordel-livro2' className='livro2'><LuaComanche/></div> 
          <div id='Cordel-livro2' className='livro2'><SalarioTerrivel /></div>
          </div>

          </div>
          <div  className='esq' onClick={Cordelesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Cordelesq2(){
    
      var mudar = document.getElementById('Cordel-containers1')
      var mudar2 = document.getElementById('Cordel-containers2')
      var livro2 = document.getElementById('Cordel-livro2')
      var livro1 = document.getElementById('Cordel-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Cordeldire2(){
    
      var mudar = document.getElementById('Cordel-containers2')
      var mudar2 = document.getElementById('Cordel-containers1')
      var livro2 = document.getElementById('Cordel-livro2')
      var livro1 = document.getElementById('Cordel-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Cordel;

  
  
          
   

  

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
  
  