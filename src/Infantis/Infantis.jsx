
 import './Infantis.css'



import Sol from './Sol/Sol';
import Maluquinho from './Maluquinho/Maluquinho';
import Principe from './Principe/Principe';
import Moto from './Moto/Moto';
import Relogio from './Relogio/Relogio';
import Perguntadeira from './Perguntadeira/Perguntadeira';
import Historias from './100/Historias';
import VoaJoao from './Voa-joao/voa';
import Elefante from './Elefante/Elefante';
import Porquinhos from './3Porquinhos/Porquinhos';


function Infantis(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Infantisdire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"INFANTIS"}</b> </h2> </div>

           <div className='container'>

           <div id='Infantis-containers1' className='containers'>

          <div id='Infantis-livro1' className='livro'><Sol /></div>
          <div id='Infantis-livro1' className='livro'><Maluquinho /> </div>
          <div id='Infantis-livro1' className='livro'><Principe /> </div>
          <div id='Infantis-livro1' className='livro'><Moto /> </div> 
          <div id='Infantis-livro1' className='livro'><Relogio /> </div>
          </div>

          <div id='Infantis-containers2' className='containers2'>

          <div id='Infantis-livro2' className='livro2'><Perguntadeira /></div>
          <div id='Infantis-livro2' className='livro2'><Historias /></div>
          <div id='Infantis-livro2' className='livro2'><VoaJoao /></div>
          <div id='Infantis-livro2' className='livro2'><Elefante /></div> 
          <div id='Infantis-livro2' className='livro2'><Porquinhos /></div>
          </div>

          </div>
          <div  className='esq' onClick={Infantisesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Infantisesq2(){
    
      var mudar = document.getElementById('Infantis-containers1')
      var mudar2 = document.getElementById('Infantis-containers2')
      var livro2 = document.getElementById('Infantis-livro2')
      var livro1 = document.getElementById('Infantis-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Infantisdire2(){
    
      var mudar = document.getElementById('Infantis-containers2')
      var mudar2 = document.getElementById('Infantis-containers1')
      var livro2 = document.getElementById('Infantis-livro2')
      var livro1 = document.getElementById('Infantis-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Infantis;

  
  
          
   

  

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
  
  