import './inf-ObrasCompleta.css'

function ObrasCompletainf(){
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
      var tituloo = document.createElement('h8');
      tituloo.innerText = partidas.Literatura[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Literatura[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Literatura[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Literatura[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Literatura[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Literatura[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[8].capa);
      document.getElementById('Literatura-capaa7').append(capa);

      document.getElementById('Literatura-tituloo7').append(tituloo);
      document.getElementById('Literatura-Descricao7').append(descricaoo1);
      document.getElementById('Literatura-autor7').append(autoor);
      document.getElementById('Literatura-ano7').append(anoor);
      document.getElementById('Literatura-licenca7').append(licenca);
      document.getElementById('Literatura-tipo7').append(tipoo);
      document.getElementById('Literatura-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa7' className='capa1'>


              <div id='Literatura-titulo7' className='titulo1'>
                <b id='Literatura-tituloo7'>TITULO :</b><br /> 
                <b id='Literatura-autor7'>AUTOR :</b><br />
                <b id='Literatura-ano7'>ANO :</b><br />
                <b id='Literatura-licenca7'>LICENÇA :</b><br />
                <b id='Literatura-tipo7'>TIPO :</b><br /><br />
                <b id='Literatura-formato7'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Literatura-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ObrasCompletainf;

    




  