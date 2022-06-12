import './inf-Marketing.css'

function MarketingInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cursos"
  
  
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
      tituloo.innerText = partidas.Cursos[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[4].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Cursos[4].cursos);
      document.getElementById('Cursos-capaa1').append(capaa);

      document.getElementById('Cursos-tituloo1').append(tituloo);
      document.getElementById('Cursos-Descricao1').append(descricaoo1);
      document.getElementById('Cursos-autor1').append(autoor);
      document.getElementById('Cursos-ano1').append(anoor);
      document.getElementById('Cursos-licenca1').append(licenca);
      document.getElementById('Cursos-tipo1').append(tipoo);
      document.getElementById('Cursos-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa1' className='capa1'>


              <div id='Cursos-titulo1' className='titulo1'>
                <b id='Cursos-tituloo1'>TITULO :</b><br /> 
                <b id='Cursos-autor1'>AUTOR :</b><br />
                <b id='Cursos-ano1'>ANO :</b><br />
                <b id='Cursos-licenca1'>LICENÇA :</b><br />
                <b id='Cursos-tipo1'>TIPO :</b><br /><br />
                <b id='Cursos-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/10EYM2uJRKLWTlG0HucqVXODxb9XmmSz4/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default MarketingInf;

    




   