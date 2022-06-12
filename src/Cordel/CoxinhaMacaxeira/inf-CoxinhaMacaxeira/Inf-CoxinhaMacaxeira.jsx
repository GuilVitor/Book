import './inf-CoxinhaMacaxeira.css'

function CoxinhaMacaxeirainf(){
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
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Cordel[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[3].capa);
      document.getElementById('Cordel-capaa4').append(capa);

      document.getElementById('Cordel-tituloo4').append(tituloo);
      document.getElementById('Cordel-Descricao4').append(descricaoo1);
      document.getElementById('Cordel-autor4').append(autoor);
      document.getElementById('Cordel-ano4').append(anoor);
      document.getElementById('Cordel-licenca4').append(licenca);
      document.getElementById('Cordel-tipo4').append(tipoo);
      document.getElementById('Cordel-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa4' className='capa1'>


              <div id='Cordel-titulo4' className='titulo1'>
                <b id='Cordel-tituloo4'>TITULO :</b><br /> 
                <b id='Cordel-autor4'>AUTOR :</b><br />
                <b id='Cordel-ano4'>ANO :</b><br />
                <b id='Cordel-licenca4'>LICENÇA :</b><br />
                <b id='Cordel-tipo4'>TIPO :</b><br /><br />
                <b id='Cordel-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1pEYLVA2GoXGhyQHqz9vkBvIRHzZa9fhe/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Cordel-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CoxinhaMacaxeirainf;

    




   