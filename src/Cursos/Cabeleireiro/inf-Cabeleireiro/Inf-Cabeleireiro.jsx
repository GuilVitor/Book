import './inf-Cabeleireiro.css'

function CabelereiroInf(){
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
      tituloo.innerText = partidas.Cursos[10].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[10].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[10].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[10].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[10].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[10].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[10].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[10].cursos);
      document.getElementById('Cursos-capaa10').append(capa);

      document.getElementById('Cursos-tituloo10').append(tituloo);
      document.getElementById('Cursos-Descricao10').append(descricaoo1);
      document.getElementById('Cursos-autor10').append(autoor);
      document.getElementById('Cursos-ano10').append(anoor);
      document.getElementById('Cursos-licenca10').append(licenca);
      document.getElementById('Cursos-tipo10').append(tipoo);
      document.getElementById('Cursos-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capaa10' className='Cursos-capa10'><div/>


              <div id='Cursos-titulo10' className='titulo1'>
                <b id='Cursos-tituloo10'>TITULO :</b><br /> 
                <b id='Cursos-autor10'>AUTOR :</b><br />
                <b id='Cursos-ano10'>ANO :</b><br />
                <b id='Cursos-licenca10'>LICENÇA :</b><br />
                <b id='Cursos-tipo10'>TIPO :</b><br /><br />
                <b id='Cursos-formato10'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1VGOyQIqN2JsdxvR7FhtUSG6Zmqt8oec7/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Cursos-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursoss-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CabelereiroInf;

    




  