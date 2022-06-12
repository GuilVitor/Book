import './inf-Relogio.css'

function RelogioInf(){
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
      tituloo.innerText = partidas.Infantis[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[4].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Infantis[4].capa);
      document.getElementById('Infantis-capaa1').append(capaa);

      document.getElementById('Infantis-tituloo1').append(tituloo);
      document.getElementById('Infantis-Descricao1').append(descricaoo1);
      document.getElementById('Infantis-autor1').append(autoor);
      document.getElementById('Infantis-ano1').append(anoor);
      document.getElementById('Infantis-licenca1').append(licenca);
      document.getElementById('Infantis-tipo1').append(tipoo);
      document.getElementById('Infantis-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa1' className='capa1'>


              <div id='Infantis-titulo1' className='titulo1'>
                <b id='Infantis-tituloo1'>TITULO :</b><br /> 
                <b id='Infantis-autor1'>AUTOR :</b><br />
                <b id='Infantis-ano1'>ANO :</b><br />
                <b id='Infantis-licenca1'>LICENÇA :</b><br />
                <b id='Infantis-tipo1'>TIPO :</b><br /><br />
                <b id='Infantis-formato1'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1UqsAtXSkYbjioTnZvnHLoND1arhUAyTt/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button> </a> 

             


</div>


   <div id='Infantis-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default RelogioInf;

    




   