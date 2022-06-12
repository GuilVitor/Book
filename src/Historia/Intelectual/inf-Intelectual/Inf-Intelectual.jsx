import './inf-Intelectual.css'

function Intelectualinf(){
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
      tituloo.innerText = partidas.Historia[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[6].capa);
      document.getElementById('Intelectual-capaa1').append(capa);

      document.getElementById('Intelectual-tituloo1').append(tituloo);
      document.getElementById('Intelectual-Descricao1').append(descricaoo1);
      document.getElementById('Intelectual-autor1').append(autoor);
      document.getElementById('Intelectual-ano1').append(anoor);
      document.getElementById('Intelectual-licenca1').append(licenca);
      document.getElementById('Intelectual-tipo1').append(tipoo);
      document.getElementById('Intelectual-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Intelectual-capaa1' className='capa1'>


              <div id='Intelectual-titulo1' className='titulo1'>
                <b id='Intelectual-tituloo1'>TITULO :</b><br /> 
                <b id='Intelectual-autor1'>AUTOR :</b><br />
                <b id='Intelectual-ano1'>ANO :</b><br />
                <b id='Intelectual-licenca1'>LICENÇA :</b><br />
                <b id='Intelectual-tipo1'>TIPO :</b><br /><br />
                <b id='Intelectual-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1_0W_0-FFc560zelDgI_pUwbuX8xWmFLt/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Intelectual-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundoo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Intelectualinf;

    




  