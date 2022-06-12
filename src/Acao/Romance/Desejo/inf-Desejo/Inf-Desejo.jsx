import './inf-Desejo.css'

function Desejoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
  function infTentativa() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarTentativa(obj);
    })
  })
  .catch()
  }
  function mostrarTentativa(partidas) {
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Romance[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[7].capa);
      document.getElementById('Romance-capaa5').append(capa);

      document.getElementById('Romance-tituloo5').append(tituloo);
      document.getElementById('Romance-Descricao5').append(descricaoo1);
      document.getElementById('Romance-autorr5').append(autoor);
      document.getElementById('Romance-ano5').append(anoor);
      document.getElementById('Romance-licenca5').append(licenca);
      document.getElementById('Romance-tipo5').append(tipoo);
      document.getElementById('Romance-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa5' className='capa1'>


              <div id='Romance-titulo5' className='titulo1'>
                <b id='Romance-tituloo5'>TITULO :</b><br /> 
                <b id='Romance-autorr5'>AUTOR :</b><br />
                <b id='Romance-ano5'>ANO :</b><br />
                <b id='Romance-licenca5'>LICENÇA :</b><br />
                <b id='Romance-tipo5'>TIPO :</b><br /><br />
                <b id='Romance-formato5'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Romance-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Desejoinf;

    




   