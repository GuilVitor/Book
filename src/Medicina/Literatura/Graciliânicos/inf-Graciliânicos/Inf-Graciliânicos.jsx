import './inf-Graciliânicos.css'

function Graciliânicosinf(){
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
      tituloo.innerText = partidas.Literatura[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[7].capa);
      document.getElementById('Literatura-capaa5').append(capa);

      document.getElementById('Literatura-tituloo5').append(tituloo);
      document.getElementById('Literatura-Descricao5').append(descricaoo1);
      document.getElementById('Literatura-autorr5').append(autoor);
      document.getElementById('Literatura-ano5').append(anoor);
      document.getElementById('Literatura-licenca5').append(licenca);
      document.getElementById('Literatura-tipo5').append(tipoo);
      document.getElementById('Literatura-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa5' className='capa1'>


              <div id='Literatura-titulo5' className='titulo1'>
                <b id='Literatura-tituloo5'>TITULO :</b><br /> 
                <b id='Literatura-autorr5'>AUTOR :</b><br />
                <b id='Literatura-ano5'>ANO :</b><br />
                <b id='Literatura-licenca5'>LICENÇA :</b><br />
                <b id='Literatura-tipo5'>TIPO :</b><br /><br />
                <b id='Literatura-formato5'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Literatura-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Graciliânicosinf;

    




   