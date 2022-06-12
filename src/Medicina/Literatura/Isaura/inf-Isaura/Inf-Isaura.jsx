import './inf-Isaura.css'

function Isaurainf(){
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
      tituloo.innerText = partidas.Literatura[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[6].capa);
      document.getElementById('Isaura-capaa1').append(capa);

      document.getElementById('Isaura-tituloo1').append(tituloo);
      document.getElementById('Isaura-Descricao1').append(descricaoo1);
      document.getElementById('Isaura-autor1').append(autoor);
      document.getElementById('Isaura-ano1').append(anoor);
      document.getElementById('Isaura-licenca1').append(licenca);
      document.getElementById('Isaura-tipo1').append(tipoo);
      document.getElementById('Isaura-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Isaura-capaa1' className='capa1'>


              <div id='Isaura-titulo1' className='titulo1'>
                <b id='Isaura-tituloo1'>TITULO :</b><br /> 
                <b id='Isaura-autor1'>AUTOR :</b><br />
                <b id='Isaura-ano1'>ANO :</b><br />
                <b id='Isaura-licenca1'>LICENÇA :</b><br />
                <b id='Isaura-tipo1'>TIPO :</b><br /><br />
                <b id='Isaura-formato1'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Isaura-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Isaurainf;

    




  