import './inf-Mundo.css'

function MundoInf(){
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
      tituloo.innerText = partidas.Aventura[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[0].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Aventura[0].capa);
      document.getElementById('acao-capaa1').append(capaa);

      document.getElementById('acao-tituloo1').append(tituloo);
      document.getElementById('acao-Descricao1').append(descricaoo1);
      document.getElementById('acao-autor1').append(autoor);
      document.getElementById('acao-ano1').append(anoor);
      document.getElementById('acao-licenca1').append(licenca);
      document.getElementById('acao-tipo1').append(tipoo);
      document.getElementById('acao-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa1' className='capa1'>


              <div id='acao-titulo1' className='titulo1'>
                <b id='acao-tituloo1'>TITULO :</b><br /> 
                <b id='acao-autor1'>AUTOR :</b><br />
                <b id='acao-ano1'>ANO :</b><br />
                <b id='acao-licenca1'>LICENÇA :</b><br />
                <b id='acao-tipo1'>TIPO :</b><br /><br />
                <b id='acao-formato1'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/12aNsOK8aldnc0ldyz8HeceLZvT0kMrmP/view?usp=sharing ">  <button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default MundoInf;

    




   