import './inf-SaudeDoencasBrasil.css'

function SaudeDoencasBrasilinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Medicina"
  
  
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
      tituloo.innerText = partidas.Medicina[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[6].capa);
      document.getElementById('SaudeDoencasBrasil-capaa1').append(capa);

      document.getElementById('SaudeDoencasBrasil-tituloo1').append(tituloo);
      document.getElementById('SaudeDoencasBrasil-Descricao1').append(descricaoo1);
      document.getElementById('SaudeDoencasBrasil-autor1').append(autoor);
      document.getElementById('SaudeDoencasBrasil-ano1').append(anoor);
      document.getElementById('SaudeDoencasBrasil-licenca1').append(licenca);
      document.getElementById('SaudeDoencasBrasil-tipo1').append(tipoo);
      document.getElementById('SaudeDoencasBrasil-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='SaudeDoencasBrasil-capaa1' className='capa1'>


              <div id='SaudeDoencasBrasil-titulo1' className='titulo1'>
                <b id='SaudeDoencasBrasil-tituloo1'>TITULO :</b><br /> 
                <b id='SaudeDoencasBrasil-autor1'>AUTOR :</b><br />
                <b id='SaudeDoencasBrasil-ano1'>ANO :</b><br />
                <b id='SaudeDoencasBrasil-licenca1'>LICENÇA :</b><br />
                <b id='SaudeDoencasBrasil-tipo1'>TIPO :</b><br /><br />
                <b id='SaudeDoencasBrasil-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1qUNMldleS13ytroYENmYy4YKFRfJJN3b/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='SaudeDoencasBrasil-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default SaudeDoencasBrasilinf;

    




  