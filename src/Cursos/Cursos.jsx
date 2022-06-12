
 import './Cursos.css'



import Criptografia from './Criptografia/Criptografia';
import Java from './Javaa/Javaa';
import Microeconomia from './Microeconomia/Microeconomia';
import Ingles from './Ingles/Ingles';
import Marketing from './Marketing/Marketing';
import InglesIniciantes from './Ingles-Iniciantes/Ingles-Iniciantes';
import Agropecuaria from './Agropecuaria/Agropecuaria';
import Eletricista from './Eletricista/Eletricista';
import Desenho from './Desenho/Desenho';

import Historias from './Agropecuaria/Agropecuaria';
import Porquinhos from './Cabeleireiro/Cabeleireiro';


function Cursos(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Cursosdire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{" CURSOS"}</b> </h2> </div>

           <div className='container'>

           <div id='Cursos-containers1' className='containers'>

          <div id='Cursos-livro1' className='livro'><Java /></div>
          <div id='Cursos-livro1' className='livro'><Criptografia /> </div>
          <div id='Cursos-livro1' className='livro'><Microeconomia /> </div>
          <div id='Cursos-livro1' className='livro'><Ingles /> </div> 
          <div id='Cursos-livro1' className='livro'><Marketing /> </div>
          </div>

          <div id='Cursos-containers2' className='containers2'>

          <div id='Cursos-livro2' className='livro2'><InglesIniciantes /></div>
          <div id='Cursos-livro2' className='livro2'><Agropecuaria /></div>
          <div id='Cursos-livro2' className='livro2'><Eletricista /></div>
          <div id='Cursos-livro2' className='livro2'><Desenho /></div> 
          <div id='Cursos-livro2' className='livro2'><Porquinhos /></div>
          </div>

          </div>
          <div  className='esq' onClick={Cursosesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Cursosesq2(){
    
      var mudar = document.getElementById('Cursos-containers1')
      var mudar2 = document.getElementById('Cursos-containers2')
      var livro2 = document.getElementById('Cursos-livro2')
      var livro1 = document.getElementById('Cursos-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Cursosdire2(){
    
      var mudar = document.getElementById('Cursos-containers2')
      var mudar2 = document.getElementById('Cursos-containers1')
      var livro2 = document.getElementById('Cursos-livro2')
      var livro1 = document.getElementById('Cursos-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Cursos;

  
  
          
   

  

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
  
  