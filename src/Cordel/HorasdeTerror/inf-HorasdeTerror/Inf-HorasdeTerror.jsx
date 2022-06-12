import './inf-HorasdeTerror.css'

function HorasdeTerrorinf(){
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
      tituloo.innerText = partidas.Cordel[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[7].capa);
      document.getElementById('Cordel-capaa5').append(capa);

      document.getElementById('Cordel-tituloo5').append(tituloo);
      document.getElementById('Cordel-Descricao5').append(descricaoo1);
      document.getElementById('Cordel-autorr5').append(autoor);
      document.getElementById('Cordel-ano5').append(anoor);
      document.getElementById('Cordel-licenca5').append(licenca);
      document.getElementById('Cordel-tipo5').append(tipoo);
      document.getElementById('Cordel-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa5' className='capa1'>


              <div id='Cordel-titulo5' className='titulo1'>
                <b id='Cordel-tituloo5'>TITULO :</b><br /> 
                <b id='Cordel-autorr5'>AUTOR : Keith</b><br />
                <b id='Cordel-ano5'>ANO :</b><br />
                <b id='Cordel-licenca5'>LICENÇA :</b><br />
                <b id='Cordel-tipo5'>TIPO :</b><br /><br />
                <b id='Cordel-formato5'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1nItTjJJs9mP19YJ9T_YfR-NDQusQAiDM/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Cordel-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default HorasdeTerrorinf;

    




   