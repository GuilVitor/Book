import './inf-Civilacacao.css'

function CivilizacaoInf(){
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
      tituloo.innerText = partidas.Historia[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[9].capa);
      document.getElementById('Historia-capaa10').append(capa);

      document.getElementById('Historia-tituloo10').append(tituloo);
      document.getElementById('Historia-Descricao10').append(descricaoo1);
      document.getElementById('Historia-autor10').append(autoor);
      document.getElementById('Historia-ano10').append(anoor);
      document.getElementById('Historia-licenca10').append(licenca);
      document.getElementById('Historia-tipo10').append(tipoo);
      document.getElementById('Historia-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa10' className='Historia-capa10'><div/>


              <div id='Historia-titulo10' className='titulo1'>
                <b id='Historia-tituloo10'>TITULO :</b><br /> 
                <b id='Historia-autor10'>AUTOR :</b><br />
                <b id='Historia-ano10'>ANO :</b><br />
                <b id='Historia-licenca10'>LICENÇA :</b><br />
                <b id='Historia-tipo10'>TIPO :</b><br /><br />
                <b id='Historia-formato10'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/14AVfYy9BLeWmF7itSMe9xTJsDWk_bsPQ/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CivilizacaoInf;

    




  