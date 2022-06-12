import './inf-Agropecuaria.css'

function AgropecuariaInf(){
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
      tituloo.innerText = partidas.Cursos[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[6].cursos);
      document.getElementById('Cursos-capaa8').append(capa);

      document.getElementById('Cursos-tituloo8').append(tituloo);
      document.getElementById('Cursos-Descricao8').append(descricaoo1);
      document.getElementById('Cursos-autor8').append(autoor);
      document.getElementById('Cursos-ano8').append(anoor);
      document.getElementById('Cursos-licenca8').append(licenca);
      document.getElementById('Cursos-tipo8').append(tipoo);
      document.getElementById('Cursos-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa8' className='capa1'>


              <div id='Cursos-titulo8' className='titulo1'>
                <b id='Cursos-tituloo8'>TITULO :</b><br /> 
                <b id='Cursos-autor8'>AUTOR :</b><br />
                <b id='Cursos-ano8'>ANO :</b><br />
                <b id='Cursos-licenca8'>LICENÇA :</b><br />
                <b id='Cursos-tipo8'>TIPO :</b><br /><br />
                <b id='Cursos-formato8'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1tqtnNZKjl6Lk9S-eoKw2KPsw9jPrjZdh/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default AgropecuariaInf;

    




   