import './inf-Terra.css'

function Terrasinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
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
      tituloo.innerText = partidas.Romance[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Romance[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Romance[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Romance[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Romance[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Romance[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[8].capa);
      document.getElementById('Romance-capaa7').append(capa);

      document.getElementById('Romance-tituloo7').append(tituloo);
      document.getElementById('Romance-Descricao7').append(descricaoo1);
      document.getElementById('Romance-autor7').append(autoor);
      document.getElementById('Romance-ano7').append(anoor);
      document.getElementById('Romance-licenca7').append(licenca);
      document.getElementById('Romance-tipo7').append(tipoo);
      document.getElementById('Romance-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa7' className='capa1'>


              <div id='Romance-titulo7' className='titulo1'>
                <b id='Romance-tituloo7'>TITULO :</b><br /> 
                <b id='Romance-autor7'>AUTOR :</b><br />
                <b id='Romance-ano7'>ANO :</b><br />
                <b id='Romance-licenca7'>LICENÇA :</b><br />
                <b id='Romance-tipo7'>TIPO :</b><br /><br />
                <b id='Romance-formato7'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Romance-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Terrasinf;

    




  