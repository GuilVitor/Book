import './inf-HumildadeCrista.css'

function HumildadeCristainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Religiao"
  
  
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
      tituloo.innerText = partidas.Religiao[8].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[8].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[8].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[8].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[8].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[8].capa);
      document.getElementById('Religiao-capaa5').append(capa);

      document.getElementById('Religiao-tituloo5').append(tituloo);
      document.getElementById('Religiao-Descricao5').append(descricaoo1);
      document.getElementById('Religiao-autorr5').append(autoor);
      document.getElementById('Religiao-ano5').append(anoor);
      document.getElementById('Religiao-licenca5').append(licenca);
      document.getElementById('Religiao-tipo5').append(tipoo);
      document.getElementById('Religiao-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capaa5' className='capa1'>


              <div id='Religiao-titulo5' className='titulo1'>
                <b id='Religiao-tituloo5'>TITULO :</b><br /> 
                <b id='Religiao-autorr5'>AUTOR :</b><br />
                <b id='Religiao-ano5'>ANO :</b><br />
                <b id='Religiao-licenca5'>LICENÇA :</b><br />
                <b id='Religiao-tipo5'>TIPO :</b><br /><br />
                <b id='Religiao-formato5'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1tfhqRHwoMm68CRzNBFzEgX-4mIqwjoEN/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Religiao-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default HumildadeCristainf;

    




   