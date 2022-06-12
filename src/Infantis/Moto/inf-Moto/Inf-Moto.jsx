import './inf-Moto.css'

function Motoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Infantis"
  
  
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
      tituloo.innerText = partidas.Infantis[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[3].capa);
      document.getElementById('Infantis-capaa4').append(capa);

      document.getElementById('Infantis-tituloo4').append(tituloo);
      document.getElementById('Infantis-Descricao4').append(descricaoo1);
      document.getElementById('Infantis-autor4').append(autoor);
      document.getElementById('Infantis-ano4').append(anoor);
      document.getElementById('Infantis-licenca4').append(licenca);
      document.getElementById('Infantis-tipo4').append(tipoo);
      document.getElementById('Infantis-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa4' className='capa1'>


              <div id='Infantis-titulo4' className='titulo1'>
                <b id='Infantis-tituloo4'>TITULO :</b><br /> 
                <b id='Infantis-autor4'>AUTOR :</b><br />
                <b id='Infantis-ano4'>ANO :</b><br />
                <b id='Infantis-licenca4'>LICENÇA :</b><br />
                <b id='Infantis-tipo4'>TIPO :</b><br /><br />
                <b id='Infantis-formato4'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/12t4vunIo7C4obTjZGN3tRH9NUiB4x2Zf/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Infantis-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Motoinf;

    




   