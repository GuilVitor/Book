import './inf-Historias.css'

function HistoriasInf(){
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
      tituloo.innerText = partidas.Infantis[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[6].capa);
      document.getElementById('Infantis-capaa8').append(capa);

      document.getElementById('Infantis-tituloo8').append(tituloo);
      document.getElementById('Infantis-Descricao8').append(descricaoo1);
      document.getElementById('Infantis-autor8').append(autoor);
      document.getElementById('Infantis-ano8').append(anoor);
      document.getElementById('Infantis-licenca8').append(licenca);
      document.getElementById('Infantis-tipo8').append(tipoo);
      document.getElementById('Infantis-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa8' className='capa1'>


              <div id='Infantis-titulo8' className='titulo1'>
                <b id='Infantis-tituloo8'>TITULO :</b><br /> 
                <b id='Infantis-autor8'>AUTOR :</b><br />
                <b id='Infantis-ano8'>ANO :</b><br />
                <b id='Infantis-licenca8'>LICENÇA :</b><br />
                <b id='Infantis-tipo8'>TIPO :</b><br /><br />
                <b id='Infantis-formato8'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1_ffMRERmM7jIc5yw-hJrXkCbeGe29cPk/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Infantis-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default HistoriasInf;

    




   