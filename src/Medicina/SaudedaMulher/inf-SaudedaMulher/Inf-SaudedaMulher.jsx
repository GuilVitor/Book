import './inf-SaudedaMulher.css'

function SaudedaMulherInf(){
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
      tituloo.innerText = partidas.Medicina[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[4].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Medicina[4].capa);
      document.getElementById('Medicina-capaa1').append(capaa);

      document.getElementById('Medicina-tituloo1').append(tituloo);
      document.getElementById('Medicina-Descricao1').append(descricaoo1);
      document.getElementById('Medicina-autor1').append(autoor);
      document.getElementById('Medicina-ano1').append(anoor);
      document.getElementById('Medicina-licenca1').append(licenca);
      document.getElementById('Medicina-tipo1').append(tipoo);
      document.getElementById('Medicina-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa1' className='capa1'>


              <div id='Medicina-titulo1' className='titulo1'>
                <b id='Medicina-tituloo1'>TITULO : </b><br /> 
                <b id='Medicina-autor1'>AUTOR :</b><br />
                <b id='Medicina-ano1'>ANO :</b><br />
                <b id='Medicina-licenca1'>LICENÇA :</b><br />
                <b id='Medicina-tipo1'>TIPO :</b><br /><br />
                <b id='Medicina-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1Rm0gOgoPnEXEdrN7e2GtE_166H71i255/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default SaudedaMulherInf;

    




   