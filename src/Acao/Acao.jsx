
 import './Acao.css'
import Mundo from './Bichos/Mundo';
import Templo from './Templo/Templo';
import Viagem from './Viagem/Viagem';
import Lua from './Lua/Lua';
import Submarino from './Submarinas/Submarinas';
import Diligencia from './Diligencia/Diligencia';
import Mulheres from './Mulhesres/Mulheres';
import Polvora from './Polvora/Polvora';
import Morte from './Morte/Morte';
import Companheira from './Companheira/Companheira';



function Acao(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={dire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"AVENTURA"}</b> </h2> </div>

           <div className='container'>

           <div id='acao-containers1' className='containers'>

          <div id='acao-livro1' className='livro'><Mundo /></div>
          <div id='acao-livro1' className='livro'> <Viagem /> </div>
          <div id='acao-livro1' className='livro'> <Lua /></div>
          <div id='acao-livro1' className='livro'><Submarino /></div> 
          <div id='acao-livro1' className='livro'><Diligencia /></div>
          </div>

          <div id='acao-containers2' className='containers2'>

          <div id='acao-livro2' className='livro2'><Mulheres /></div>
          <div id='acao-livro2' className='livro2'><Polvora /></div>
          <div id='acao-livro2' className='livro2'><Morte /></div>
          <div id='acao-livro2' className='livro2'><Templo /></div> 
          <div id='acao-livro2' className='livro2'><Companheira /></div>
          </div>

          </div>
          <div  className='esq' onClick={esq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function esq2(){
    
      var mudar = document.getElementById('acao-containers1')
      var mudar2 = document.getElementById('acao-containers2')
      var livro2 = document.getElementById('acao-livro2')
      var livro1 = document.getElementById('acao-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function dire2(){
    
      var mudar = document.getElementById('acao-containers2')
      var mudar2 = document.getElementById('acao-containers1')
      var livro2 = document.getElementById('acao-livro2')
      var livro1 = document.getElementById('acao-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Acao;

  
  
          
   

  

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
  
  