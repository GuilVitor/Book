import './inf-Desenho.css'

function Desenhoinf(){
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
      var tituloo = document.createElement('h8');
      tituloo.innerText = partidas.Cursos[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Cursos[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Cursos[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Cursos[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Cursos[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Cursos[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[8].cursos);
      document.getElementById('Cursos-capaa7').append(capa);

      document.getElementById('Cursos-tituloo7').append(tituloo);
      document.getElementById('Cursos-Descricao7').append(descricaoo1);
      document.getElementById('Cursos-autor7').append(autoor);
      document.getElementById('Cursos-ano7').append(anoor);
      document.getElementById('Cursos-licenca7').append(licenca);
      document.getElementById('Cursos-tipo7').append(tipoo);
      document.getElementById('Cursos-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa7' className='capa1'>


              <div id='Cursos-titulo7' className='titulo1'>
                <b id='Cursos-tituloo7'>TITULO :</b><br /> 
                <b id='Cursos-autor7'>AUTOR :</b><br />
                <b id='Cursos-ano7'>ANO :</b><br />
                <b id='Cursos-licenca7'>LICENÇA :</b><br />
                <b id='Cursos-tipo7'>TIPO :</b><br /><br />
                <b id='Cursos-formato7'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/13PpCLcISXl0Y_CEm238yYhLdbT-NFtMY/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Desenhoinf;

    




  