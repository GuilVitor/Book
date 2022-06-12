import './inf-Proclamacao.css'

function Proclamacaoinf(){
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
      

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[7].capa);
      document.getElementById('Historia-capaa5').append(capa);

      document.getElementById('Historia-Descricao5').append(descricaoo1);
      document.getElementById('Historia-autorr5').append(autoor);
      document.getElementById('Historia-ano5').append(anoor);
      document.getElementById('Historia-licenca5').append(licenca);
      document.getElementById('Historia-tipo5').append(tipoo);
      document.getElementById('Historia-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa5' className='capa1'>


              <div id='Historia-titulo5' className='titulo1'>
                <b id='Historia-tituloo5'>TITULO : 180 Anos da Proclamação</b><br /> 
                <b id='Historia-autorr5'>AUTOR :</b><br />
                <b id='Historia-ano5'>ANO :</b><br />
                <b id='Historia-licenca5'>LICENÇA :</b><br />
                <b id='Historia-tipo5'>TIPO :</b><br /><br />
                <b id='Historia-formato5'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1NRWJP-3PpUiO_GP0hSWpTzm3_LmlHAe1/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Proclamacaoinf;

    




   