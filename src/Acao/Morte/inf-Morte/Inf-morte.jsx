import './inf-Morte.css'

function MorteInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"
  
  
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
      tituloo.innerText = partidas.Aventura[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[7].capa);
      document.getElementById('acao-capaa8').append(capa);

      document.getElementById('acao-tituloo8').append(tituloo);
      document.getElementById('acao-Descricao8').append(descricaoo1);
      document.getElementById('acao-autor8').append(autoor);
      document.getElementById('acao-ano8').append(anoor);
      document.getElementById('acao-licenca8').append(licenca);
      document.getElementById('acao-tipo8').append(tipoo);
      document.getElementById('acao-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa8' className='capa1'>


              <div id='acao-titulo8' className='titulo1'>
                <b id='acao-tituloo8'>TITULO :</b><br /> 
                <b id='acao-autor8'>AUTOR :</b><br />
                <b id='acao-ano8'>ANO :</b><br />
                <b id='acao-licenca8'>LICENÇA :</b><br />
                <b id='acao-tipo8'>TIPO :</b><br /><br />
                <b id='acao-formato8'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1IL9DcTCduiLBNjFMnXBtY_M9hlVdpm9Z/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='capa-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default MorteInf;

    




   