import './inf-Garota.css'

function GarotaInf(){
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
      tituloo.innerText = partidas.Romance[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[0].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Romance[0].capa);
      document.getElementById('Romance-capaa1').append(capaa);

      document.getElementById('Romance-tituloo1').append(tituloo);
      document.getElementById('Romance-Descricao1').append(descricaoo1);
      document.getElementById('Romance-autor1').append(autoor);
      document.getElementById('Romance-ano1').append(anoor);
      document.getElementById('Romance-licenca1').append(licenca);
      document.getElementById('Romance-tipo1').append(tipoo);
      document.getElementById('Romance-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa1' className='capa1'>


              <div id='Romance-titulo1' className='titulo1'>
                <b id='Romance-tituloo1'>TITULO :</b><br /> 
                <b id='Romance-autor1'>AUTOR :</b><br />
                <b id='Romance-ano1'>ANO :</b><br />
                <b id='Romance-licenca1'>LICENÇA :</b><br />
                <b id='Romance-tipo1'>TIPO :</b><br /><br />
                <b id='Romance-formato1'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1vrywE6-M6Lb_BE3HJgWKl6ot60JTh97q/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Romance-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default GarotaInf;

    




   