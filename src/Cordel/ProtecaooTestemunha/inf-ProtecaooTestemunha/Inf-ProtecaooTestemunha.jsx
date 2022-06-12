import './inf-ProtecaooTestemunha.css'

function ProtecaooTestemunhainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"
  
  
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
      tituloo.innerText = partidas.Cordel[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[6].capa);
      document.getElementById('ProtecaooTestemunha-capaa1').append(capa);

      document.getElementById('ProtecaooTestemunha-tituloo1').append(tituloo);
      document.getElementById('ProtecaooTestemunha-Descricao1').append(descricaoo1);
      document.getElementById('ProtecaooTestemunha-autor1').append(autoor);
      document.getElementById('ProtecaooTestemunha-ano1').append(anoor);
      document.getElementById('ProtecaooTestemunha-licenca1').append(licenca);
      document.getElementById('ProtecaooTestemunha-tipo1').append(tipoo);
      document.getElementById('ProtecaooTestemunha-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='ProtecaooTestemunha-capaa1' className='capa1'>


              <div id='ProtecaooTestemunha-titulo1' className='titulo1'>
                <b id='ProtecaooTestemunha-tituloo1'>TITULO :</b><br /> 
                <b id='ProtecaooTestemunha-autor1'>AUTOR :</b><br />
                <b id='ProtecaooTestemunha-ano1'>ANO :</b><br />
                <b id='ProtecaooTestemunha-licenca1'>LICENÇA :</b><br />
                <b id='ProtecaooTestemunha-tipo1'>TIPO :</b><br /><br />
                <b id='ProtecaooTestemunha-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1vPRY51c3WrtBtlDUKcrRSfusxjVPCw4y/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='ProtecaooTestemunha-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ProtecaooTestemunhainf;

    




  