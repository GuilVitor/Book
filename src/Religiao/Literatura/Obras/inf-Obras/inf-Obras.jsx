import './inf-Obras.css'

function ObrasInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Literatura"
  
  
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
      tituloo.innerText = partidas.Literatura[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[1].capa);
      document.getElementById('Literatura-capaa8').append(capa);

      document.getElementById('Literatura-tituloo8').append(tituloo);
      document.getElementById('Literatura-Descricao8').append(descricaoo1);
      document.getElementById('Literatura-autor8').append(autoor);
      document.getElementById('Literatura-ano8').append(anoor);
      document.getElementById('Literatura-licenca8').append(licenca);
      document.getElementById('Literatura-tipo8').append(tipoo);
      document.getElementById('Literatura-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa8' className='capa1'>


              <div id='Literatura-titulo8' className='titulo1'>
                <b id='Literatura-tituloo8'>TITULO :</b><br /> 
                <b id='Literatura-autor8'>AUTOR :</b><br />
                <b id='Literatura-ano8'>ANO :</b><br />
                <b id='Literatura-licenca8'>LICENÇA :</b><br />
                <b id='Literatura-tipo8'>TIPO :</b><br /><br />
                <b id='Literatura-formato8'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Literatura-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ObrasInf;

    




   