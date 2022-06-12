import './inf-Ingles.css'

function Inglesinf(){
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
      tituloo.innerText = partidas.Cursos[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[3].capa);
      document.getElementById('Cursos-capaa4').append(capa);

      document.getElementById('Cursos-tituloo4').append(tituloo);
      document.getElementById('Cursos-Descricao4').append(descricaoo1);
      document.getElementById('Cursos-autor4').append(autoor);
      document.getElementById('Cursos-ano4').append(anoor);
      document.getElementById('Cursos-licenca4').append(licenca);
      document.getElementById('Cursos-tipo4').append(tipoo);
      document.getElementById('Cursos-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa4' className='capa1'>


              <div id='Cursos-titulo4' className='titulo1'>
                <b id='Cursos-tituloo4'>TITULO :</b><br /> 
                <b id='Cursos-autor4'>AUTOR :</b><br />
                <b id='Cursos-ano4'>ANO :</b><br />
                <b id='Cursos-licenca4'>LICENÇA :</b><br />
                <b id='Cursos-tipo4'>TIPO :</b><br /><br />
                <b id='Cursos-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1FRgXqt-TgoWjEhfUTdqzZwvjqBm_PdNq/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Inglesinf;

    




   