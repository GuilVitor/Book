import './inf-Antigas.css'

function Antigasinf(){
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
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Historia[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[0].capa);
      document.getElementById('Historia-capaa0').append(capa);

      document.getElementById('Historia-tituloo0').append(tituloo);
      document.getElementById('Historia-Descricao0').append(descricaoo1);
      document.getElementById('Historia-autor0').append(autoor);
      document.getElementById('Historia-ano0').append(anoor);
      document.getElementById('Historia-licenca0').append(licenca);
      document.getElementById('Historia-tipo0').append(tipoo);
      document.getElementById('Historia-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa0' className='capa1'>


              <div id='Historia-titulo0' className='titulo1'>
                <b id='Historia-tituloo0'>TITULO :</b><br /> 
                <b id='Historia-autor0'>AUTOR :</b><br />
                <b id='Historia-ano0'>ANO :</b><br />
                <b id='Historia-licenca0'>LICENÇA :</b><br />
                <b id='Historia-tipo0'>TIPO :</b><br /><br />
                <b id='Historia-formato0'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1M6abBeKN-Kae4RRRZ4hR1o3DhZoHoy50/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Antigasinf;

    




   