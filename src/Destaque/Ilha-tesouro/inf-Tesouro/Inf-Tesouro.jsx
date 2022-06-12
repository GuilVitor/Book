import './inf-Tesouro.css'

function TesouroInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"
  
  
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
      tituloo.innerText = partidas.Destaque[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[7].capa);
      document.getElementById('capaa8').append(capa);

      document.getElementById('tituloo8').append(tituloo);
      document.getElementById('Descricao8').append(descricaoo1);
      document.getElementById('autor8').append(autoor);
      document.getElementById('ano8').append(anoor);
      document.getElementById('licenca8').append(licenca);
      document.getElementById('tipo8').append(tipoo);
      document.getElementById('formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa8' className='capa1'>


              <div id='titulo8' className='titulo1'>
                <b id='tituloo8'>TITULO :</b><br /> 
                <b id='autor8'>AUTOR :</b><br />
                <b id='ano8'>ANO :</b><br />
                <b id='licenca8'>LICENÇA :</b><br />
                <b id='tipo8'>TIPO :</b><br /><br />
                <b id='formato8'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1RHL8d-e0PA8w5D-6EaNncEvBpJiaDeuq/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo8'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default TesouroInf;

    




  