
import Imposto from './Imposto/Imposto';
 import './Destaque.css'
import Cortico from './Cortico/cortico';
import Tentativa from './Tentativa/Tentativa';
import Classicos from './Classicos/Classicos';
import Guerra from './Guerra/Guerra';
import Senhora from './Senhora/Senhora';
import Julieta from './Romeu-julieta/Romeu';
import Tesouro from './Ilha-tesouro/Tesouro';
import Bichos from './Bichos/Bichos';
import Casmurro from './Dom-casmurro/casmurro';




function Destaque(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
           
         <div   className='dire' onClick={dire} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"DESTAQUES"}</b> </h2> </div>

           <div className='container'>
           <div id='containers1' className='containers'>

          <div id='livro1' className='livro'><Cortico /></div>
          <div id='livro1' className='livro'><Imposto /> </div>
          <div id='livro1' className='livro'><Tentativa /></div>
          <div id='livro1' className='livro'><Classicos /></div> 
          <div id='livro1' className='livro'><Guerra /></div>
          </div>

          <div id='containers2' className='containers2'>

          <div id='livro2' className='livro2'><Senhora /></div>
          <div id='livro2' className='livro2'><Julieta /></div>
          <div id='livro2' className='livro2'><Casmurro /></div>
          <div id='livro2' className='livro2'><Bichos /></div> 
          <div id='livro2' className='livro2'><Tesouro /></div>
          </div>

          </div>
          <div  className='esq' onClick={esq} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function esq(){
    
      var mudar = document.getElementById('containers1')
      var mudar2 = document.getElementById('containers2')
      var livro2 = document.getElementById('livro2')
      var livro1 = document.getElementById('livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function dire(){
    
      var mudar = document.getElementById('containers2')
      var mudar2 = document.getElementById('containers1')
      var livro2 = document.getElementById('livro2')
      var livro1 = document.getElementById('livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Destaque;

  
  
          
   

  

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
  
  