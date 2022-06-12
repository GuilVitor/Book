import './inf-ForcaSuaEspera.css'

function ForcaSuaEsperaInf(){
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
      tituloo.innerText = partidas.Cordel[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[4].Formato;
      
      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[5].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Cordel[4].capa);
      document.getElementById('Cordel-capaa1').append(capaa);

      document.getElementById('Cordel-tituloo1').append(tituloo);
      document.getElementById('Cordel-Descricao1').append(descricaoo1);
      document.getElementById('Cordel-autor1').append(autoor);
      document.getElementById('Cordel-ano1').append(anoor);
      document.getElementById('Cordel-licenca1').append(licenca);
      document.getElementById('Cordel-tipo1').append(tipoo);
      document.getElementById('Cordel-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa1' className='capa1'>


              <div id='Cordel-titulo1' className='titulo1'>
                <b id='Cordel-tituloo1'>TITULO :</b><br /> 
                <b id='Cordel-autor1'>AUTOR :</b><br />
                <b id='Cordel-ano1'>ANO :</b><br />
                <b id='Cordel-licenca1'>LICENÇA :</b><br />
                <b id='Cordel-tipo1'>TIPO :</b><br /><br />
                <b id='Cordel-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1pIydT7In-0cHN6QfOVo3_iCEdOVcmxTh/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Cordel-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ForcaSuaEsperaInf;

    




   