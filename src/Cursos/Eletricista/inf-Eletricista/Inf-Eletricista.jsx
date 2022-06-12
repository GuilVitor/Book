import './inf-Eletricista.css'

function Eletricistainf(){
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
      tituloo.innerText = partidas.Cursos[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[7].cursos);
      document.getElementById('Cursos-capaa5').append(capa);

      document.getElementById('Cursos-tituloo5').append(tituloo);
      document.getElementById('Cursos-Descricao5').append(descricaoo1);
      document.getElementById('Cursos-autorr5').append(autoor);
      document.getElementById('Cursos-ano5').append(anoor);
      document.getElementById('Cursos-licenca5').append(licenca);
      document.getElementById('Cursos-tipo5').append(tipoo);
      document.getElementById('Cursos-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa5' className='capa1'>


              <div id='Cursos-titulo5' className='titulo1'>
                <b id='Cursos-tituloo5'>TITULO :</b><br /> 
                <b id='Cursos-autorr5'>AUTOR :</b><br />
                <b id='Cursos-ano5'>ANO :</b><br />
                <b id='Cursos-licenca5'>LICENÇA :</b><br />
                <b id='Cursos-tipo5'>TIPO :</b><br /><br />
                <b id='Cursos-formato5'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1y-2GxnD20NPIVhAd0NsVChvEwfiZfCV3/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Eletricistainf;

    




   