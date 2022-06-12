
 import './Romance.css'

import ComoEra from './ComoEra/ComoEra';
import Fogo from './Fogo/Fogo';
import Garota from './Garota/Garota';
import Golf from './Golf/Golf';
import Amei from './Amei/Amei';
import Eternamente from './Eternamente/Eternamente';
import Carta from './Morte/Carta';
import Desejo from './Desejo/Desejo';
import Terras from './Terra-altas/Terra';
import Recorda from './Recorda/Recorda';

function Romance(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Romancedire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"ROMANCE"}</b> </h2> </div>

           <div className='container'>

           <div id='Romance-containers1' className='containers'>

          <div id='Romance-livro1' className='livro'><Garota /></div>
          <div id='Romance-livro1' className='livro'> <Fogo /> </div>
          <div id='Romance-livro1' className='livro'> <ComoEra /> </div>
          <div id='Romance-livro1' className='livro'> <Golf /></div> 
          <div id='Romance-livro1' className='livro'> <Amei /></div>
          </div>

          <div id='Romance-containers2' className='containers2'>

          <div id='Romance-livro2' className='livro2'><Eternamente /></div>
          <div id='Romance-livro2' className='livro2'><Carta /></div>
          <div id='Romance-livro2' className='livro2'><Desejo /></div>
          <div id='Romance-livro2' className='livro2'><Terras /></div> 
          <div id='Romance-livro2' className='livro2'><Recorda /></div>
          </div>

          </div>
          <div  className='esq' onClick={Romanceesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Romanceesq2(){
    
      var mudar = document.getElementById('Romance-containers1')
      var mudar2 = document.getElementById('Romance-containers2')
      var livro2 = document.getElementById('Romance-livro2')
      var livro1 = document.getElementById('Romance-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Romancedire2(){
    
      var mudar = document.getElementById('Romance-containers2')
      var mudar2 = document.getElementById('Romance-containers1')
      var livro2 = document.getElementById('Romance-livro2')
      var livro1 = document.getElementById('Romance-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Romance;

  
  
          
   

  

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
  
  