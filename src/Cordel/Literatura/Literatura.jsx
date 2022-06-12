
 import './Literatura.css'



import Iracema from './Iracema/Iracema';
import Obras from './Obras/Obras';
import Fluminense from './Fluminense/Fluminense';
import Reliquias from './Reliquias/Reliquias';
import Banquete from './Banquete/Banquete';
import Fedom from './Fedom/Fedom';
import Isaura from './Isaura/Isaura';
import Graciliânicos from './Graciliânicos/Graciliânicos';
import ObrasCompleta from './ObrasCompleta/ObrasCompleta';
import Monteiro from './Monteiro/Monteiro';





function Literaturaa(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Literaturadire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{" Literatura"}</b> </h2> </div>

           <div className='container'>

           <div id='Literatura-containers1' className='containers'>

          <div id='Literatura-livro1' className='livro'><Iracema /></div>
          <div id='Literatura-livro1' className='livro'><Obras /> </div>
          <div id='Literatura-livro1' className='livro'><Fluminense /> </div>
          <div id='Literatura-livro1' className='livro'><Reliquias /> </div> 
          <div id='Literatura-livro1' className='livro'><Banquete /> </div>
          </div>

          <div id='Literatura-containers2' className='containers2'>

          <div id='Literatura-livro2' className='livro2'><Fedom /></div>
          <div id='Literatura-livro2' className='livro2'><Isaura/></div>
          <div id='Literatura-livro2' className='livro2'><Graciliânicos /></div>
          <div id='Literatura-livro2' className='livro2'><ObrasCompleta/></div> 
          <div id='Literatura-livro2' className='livro2'><Monteiro /></div>
          </div>

          </div>
          <div  className='esq' onClick={Literaturaesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Literaturaesq2(){
    
      var mudar = document.getElementById('Literatura-containers1')
      var mudar2 = document.getElementById('Literatura-containers2')
      var livro2 = document.getElementById('Literatura-livro2')
      var livro1 = document.getElementById('Literatura-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Literaturadire2(){
    
      var mudar = document.getElementById('Literatura-containers2')
      var mudar2 = document.getElementById('Literatura-containers1')
      var livro2 = document.getElementById('Literatura-livro2')
      var livro1 = document.getElementById('Literatura-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Literaturaa;

  
  
          
   

  

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
  
  