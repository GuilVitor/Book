import './inf-LuaComanche.css'

function LuaComancheinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"
  
  
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
      tituloo.innerText = partidas.Cordel[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Cordel[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Cordel[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Cordel[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Cordel[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Cordel[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[8].capa);
      document.getElementById('Cordel-capaa7').append(capa);

      document.getElementById('Cordel-tituloo7').append(tituloo);
      document.getElementById('Cordel-Descricao7').append(descricaoo1);
      document.getElementById('Cordel-autor7').append(autoor);
      document.getElementById('Cordel-ano7').append(anoor);
      document.getElementById('Cordel-licenca7').append(licenca);
      document.getElementById('Cordel-tipo7').append(tipoo);
      document.getElementById('Cordel-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa7' className='capa1'>


              <div id='Cordel-titulo7' className='titulo1'>
                <b id='Cordel-tituloo7'>TITULO :</b><br /> 
                <b id='Cordel-autor7'>AUTOR :</b><br />
                <b id='Cordel-ano7'>ANO :</b><br />
                <b id='Cordel-licenca7'>LICENÇA :</b><br />
                <b id='Cordel-tipo7'>TIPO :</b><br /><br />
                <b id='Cordel-formato7'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Cordel-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default LuaComancheinf;

    




  