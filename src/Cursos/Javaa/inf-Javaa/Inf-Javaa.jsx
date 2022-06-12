import './inf-Javaa.css'

function javainf(){
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
      tituloo.innerText = partidas.Cursos[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[0].capa);
      document.getElementById('Cursos-capaa0').append(capa);

      document.getElementById('Cursos-tituloo0').append(tituloo);
      document.getElementById('Cursos-Descricao0').append(descricaoo1);
      document.getElementById('Cursos-autor0').append(autoor);
      document.getElementById('Cursos-ano0').append(anoor);
      document.getElementById('Cursos-licenca0').append(licenca);
      document.getElementById('Cursos-tipo0').append(tipoo);
      document.getElementById('Cursos-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa0' className='capa1'>


              <div id='Cursos-titulo0' className='titulo1'>
                <b id='Cursos-tituloo0'>TITULO :</b><br /> 
                <b id='Cursos-autor0'>AUTOR :</b><br />
                <b id='Cursos-ano0'>ANO :</b><br />
                <b id='Cursos-licenca0'>LICENÇA :</b><br />
                <b id='Cursos-tipo0'>TIPO :</b><br /><br />
                <b id='Cursos-formato0'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1BuTFQ2YqQJJkk2CEAj5Gtd5CKUW9aTCJ/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default javainf;

    




   