import './inf-Sus.css'

function SusInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"
  
  
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
      tituloo.innerText = partidas.Cordel[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[1].capa);
      document.getElementById('Cordel-capaa8').append(capa);

      document.getElementById('Cordel-tituloo8').append(tituloo);
      document.getElementById('Cordel-Descricao8').append(descricaoo1);
      document.getElementById('Cordel-autor8').append(autoor);
      document.getElementById('Cordel-ano8').append(anoor);
      document.getElementById('Cordel-licenca8').append(licenca);
      document.getElementById('Cordel-tipo8').append(tipoo);
      document.getElementById('Cordel-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa8' className='capa1'>


              <div id='Cordel-titulo8' className='titulo1'>
                <b id='Cordel-tituloo8'>TITULO :</b><br /> 
                <b id='Cordel-autor8'>AUTOR :</b><br />
                <b id='Cordel-ano8'>ANO :</b><br />
                <b id='Cordel-licenca8'>LICENÇA :</b><br />
                <b id='Cordel-tipo8'>TIPO :</b><br /><br />
                <b id='Cordel-formato8'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1X7F8XWbjsg51w4Gb-S8cC_DliXYoVjCu/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Cordel-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default SusInf;

    




   