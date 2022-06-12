
 import './Religiao.css'




import MestreEspiritualidade from './MestreEspiritualidade/MestreEspiritualidade';
import NovenaNatal from './NovenaNatal/NovenaNatal';
import SemanaSanta from './SemanaSanta/SemanaSanta';
import ABoaVontade from './ABoaVontade/ABoaVontade';
import Quaresma from './Quaresma/Quaresma';
import BíbliaCatólica from './BíbliaCatólica/BíbliaCatólica';
import SinodoApocalipse from './SinodoApocalipse/SinodoApocalipse';
import HumildadeCrista from './HumildadeCrista/HumildadeCrista';



function Religiao(){
    return (
     
  
    <div id='destaque' className="Destaque">
         <div id='livros-destaque' className="livros-destaque">
         <div   className='dire' onClick={Religiaodire2} > <h2> <b><br />{"<"}</b> </h2> </div>
         <div   className='direi'> <h2> <b><br />{"RELIGIAO"}</b> </h2> </div>

           <div className='container'>

           <div id='Religiao-containers1' className='containers'>

          <div id='Religiao-livro1' className='livro'><MestreEspiritualidade /></div>
          <div id='Religiao-livro1' className='livro'><Quaresma /> </div>
          <div id='Religiao-livro1' className='livro'><NovenaNatal /> </div>
          <div id='Religiao-livro1' className='livro'><BíbliaCatólica /> </div> 
          <div id='Religiao-livro1' className='livro'><SemanaSanta /> </div>
          </div>

          <div id='Religiao-containers2' className='containers2'>

          <div id='Religiao-livro2' className='livro2'><SinodoApocalipse /></div>
          <div id='Religiao-livro2' className='livro2'><ABoaVontade /></div>
          <div id='Religiao-livro2' className='livro2'><HumildadeCrista/></div>
          </div>

          </div>
          <div  className='esq' onClick={Religiaoesq2} > <h2 > <br />  <b>{">"}</b> </h2></div>

         </div>

    </div>

  
  
    );

    function Religiaoesq2(){
    
      var mudar = document.getElementById('Religiao-containers1')
      var mudar2 = document.getElementById('Religiao-containers2')
      var livro2 = document.getElementById('Religiao-livro2')
      var livro1 = document.getElementById('Religiao-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro2.style.display='block'
      livro1.style.display='none'
      
  
     }

     function Religiaodire2(){
    
      var mudar = document.getElementById('Religiao-containers2')
      var mudar2 = document.getElementById('Religiao-containers1')
      var livro2 = document.getElementById('Religiao-livro2')
      var livro1 = document.getElementById('Religiao-livro1')

      mudar.style.display='none'
      mudar2.style.display='block'
      mudar2.style.display='flex'
      livro1.style.display='block'
      livro2.style.display='none'
      
  
     }
            
    

  }
  
   export default Religiao;

  
  
          
   

  

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
  
  