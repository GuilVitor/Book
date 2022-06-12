import './inf-HistoriaBrasil.css'

function HistoriaBrasilinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Historia"
  
  
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
      var tituloo = document.createElement('h8');
      tituloo.innerText = partidas.Historia[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Historia[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Historia[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Historia[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Historia[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Historia[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[8].capa);
      document.getElementById('Historia-capaa7').append(capa);

      document.getElementById('Historia-tituloo7').append(tituloo);
      document.getElementById('Historia-Descricao7').append(descricaoo1);
      document.getElementById('Historia-autor7').append(autoor);
      document.getElementById('Historia-ano7').append(anoor);
      document.getElementById('Historia-licenca7').append(licenca);
      document.getElementById('Historia-tipo7').append(tipoo);
      document.getElementById('Historia-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa7' className='capa1'>


              <div id='Historia-titulo7' className='titulo1'>
                <b id='Historia-tituloo7'>TITULO :</b><br /> 
                <b id='Historia-autor7'>AUTOR :</b><br />
                <b id='Historia-ano7'>ANO :</b><br />
                <b id='Historia-licenca7'>LICENÇA :</b><br />
                <b id='Historia-tipo7'>TIPO :</b><br /><br />
                <b id='Historia-formato7'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1DT59NJt3HS6UZGLdpo1jNPN5M4WInedo/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default HistoriaBrasilinf;

    




  