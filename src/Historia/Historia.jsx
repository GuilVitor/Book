
 import './Historia.css'

import Antigas from './Antigas/Antigas';
import Abolicao from './Abolicao/Abolicao';
import Escravidao from './Escravidao/Escravidao';
import Brasil from './Brasil/Brasil';
import Intelectual from './Intelectual/Intelectual';
import Proclamacao from './Proclamacao/Proclamacao';
import HistoriaBrasil from './HistoriaBrasil/HistoriaBrasil';
import Civilizacao from './Civilacacao/Civilacacao';


import Trono from './Trono/Trono';

import Ciencia from './Ciencia/Ciencia';


function Historia(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Historiadire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{" HISTORIA"}</b> </h2> </div>

           <div className='container'>

           <div id='Historia-containers1' className='containers'>

          <div id='Historia-livro1' className='livro'><Antigas /></div>
          <div id='Historia-livro1' className='livro'><Abolicao /> </div>
          <div id='Historia-livro1' className='livro'><Escravidao /> </div>
          <div id='Historia-livro1' className='livro'><Ciencia /> </div> 
          <div id='Historia-livro1' className='livro'><Brasil /> </div>
          </div>

          <div id='Historia-containers2' className='containers2'>

          <div id='Historia-livro2' className='livro2'><Trono /></div>
          <div id='Historia-livro2' className='livro2'><Intelectual/></div>
          <div id='Historia-livro2' className='livro2'><Proclamacao /></div>
          <div id='Historia-livro2' className='livro2'><HistoriaBrasil /></div> 
          <div id='Historia-livro2' className='livro2'><Civilizacao /></div>
          </div>

          </div>
          <div  className='esq' onClick={Historiaesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Historiaesq2(){
    
      var mudar = document.getElementById('Historia-containers1')
      var mudar2 = document.getElementById('Historia-containers2')
      var livro2 = document.getElementById('Historia-livro2')
      var livro1 = document.getElementById('Historia-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Historiadire2(){
    
      var mudar = document.getElementById('Historia-containers2')
      var mudar2 = document.getElementById('Historia-containers1')
      var livro2 = document.getElementById('Historia-livro2')
      var livro1 = document.getElementById('Historia-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Historia;

  
  
          
   

  

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
  
  