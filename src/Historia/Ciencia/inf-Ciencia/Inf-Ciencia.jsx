import './inf-Ciencia.css'

function Cienciainf(){
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
      tituloo.innerText = partidas.Historia[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[3].capa);
      document.getElementById('Historia-capaa4').append(capa);

      document.getElementById('Historia-tituloo4').append(tituloo);
      document.getElementById('Historia-Descricao4').append(descricaoo1);
      document.getElementById('Historia-autor4').append(autoor);
      document.getElementById('Historia-ano4').append(anoor);
      document.getElementById('Historia-licenca4').append(licenca);
      document.getElementById('Historia-tipo4').append(tipoo);
      document.getElementById('Historia-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa4' className='capa1'>


              <div id='Historia-titulo4' className='titulo1'>
                <b id='Historia-tituloo4'>TITULO :</b><br /> 
                <b id='Historia-autor4'>AUTOR :</b><br />
                <b id='Historia-ano4'>ANO :</b><br />
                <b id='Historia-licenca4'>LICENÇA :</b><br />
                <b id='Historia-tipo4'>TIPO :</b><br /><br />
                <b id='Historia-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1DCtveE9acmvbrCuPzM_FDI7HkE6Rxrv4/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Cienciainf;

    




   