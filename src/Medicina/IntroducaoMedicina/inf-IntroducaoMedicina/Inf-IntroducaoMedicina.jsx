import './inf-IntroducaoMedicina.css'

function IntroducaoMedicinainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Medicina"
  
  
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
      tituloo.innerText = partidas.Medicina[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[7].capa);
      document.getElementById('Medicina-capaa5').append(capa);

      document.getElementById('Medicina-tituloo5').append(tituloo);
      document.getElementById('Medicina-Descricao5').append(descricaoo1);
      document.getElementById('Medicina-autorr5').append(autoor);
      document.getElementById('Medicina-ano5').append(anoor);
      document.getElementById('Medicina-licenca5').append(licenca);
      document.getElementById('Medicina-tipo5').append(tipoo);
      document.getElementById('Medicina-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa5' className='capa1'>


              <div id='Medicina-titulo5' className='titulo1'>
                <b id='Medicina-tituloo5'>TITULO :</b><br /> 
                <b id='Medicina-autorr5'>AUTOR :</b><br />
                <b id='Medicina-ano5'>ANO :</b><br />
                <b id='Medicina-licenca5'>LICENÇA :</b><br />
                <b id='Medicina-tipo5'>TIPO :</b><br /><br />
                <b id='Medicina-formato5'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1EJtqaZaGwQ7OxK6UtJjjDO6Ut1MsRAzI/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default IntroducaoMedicinainf;

    




   