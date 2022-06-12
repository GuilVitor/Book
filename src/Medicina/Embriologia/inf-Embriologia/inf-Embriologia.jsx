import './inf-Embriologia.css'

function EmbriologiaInf(){
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
      tituloo.innerText = partidas.Medicina[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[1].capa);
      document.getElementById('Medicina-capaa8').append(capa);

      document.getElementById('Medicina-tituloo8').append(tituloo);
      document.getElementById('Medicina-Descricao8').append(descricaoo1);
      document.getElementById('Medicina-autor8').append(autoor);
      document.getElementById('Medicina-ano8').append(anoor);
      document.getElementById('Medicina-licenca8').append(licenca);
      document.getElementById('Medicina-tipo8').append(tipoo);
      document.getElementById('Medicina-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa8' className='capa1'>


              <div id='Medicina-titulo8' className='titulo1'>
                <b id='Medicina-tituloo8'>TITULO :</b><br /> 
                <b id='Medicina-autor8'>AUTOR :</b><br />
                <b id='Medicina-ano8'>ANO :</b><br />
                <b id='Medicina-licenca8'>LICENÇA :</b><br />
                <b id='Medicina-tipo8'>TIPO :</b><br /><br />
                <b id='Medicina-formato8'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1XCZEwLoJ228Pvaox9lq0lIq4t4_p10cv/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundoo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default EmbriologiaInf;

    




   