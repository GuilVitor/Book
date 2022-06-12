import './inf-GestacaoodeAltoRisco.css'

function GestacaodeAltoRiscoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Medicina"
  
  
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
      tituloo.innerText = partidas.Medicina[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[3].capa);
      document.getElementById('Medicina-capaa4').append(capa);

      document.getElementById('Medicina-tituloo4').append(tituloo);
      document.getElementById('Medicina-Descricao4').append(descricaoo1);
      document.getElementById('Medicina-autor4').append(autoor);
      document.getElementById('Medicina-ano4').append(anoor);
      document.getElementById('Medicina-licenca4').append(licenca);
      document.getElementById('Medicina-tipo4').append(tipoo);
      document.getElementById('Medicina-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa4' className='capa1'>


              <div id='Medicina-titulo4' className='titulo1'>
                <b id='Medicina-tituloo4'>TITULO :</b><br /> 
                <b id='Medicina-autor4'>AUTOR :</b><br />
                <b id='Medicina-ano4'>ANO :</b><br />
                <b id='Medicina-licenca4'>LICENÇA :</b><br />
                <b id='Medicina-tipo4'>TIPO :</b><br /><br />
                <b id='Medicina-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1iuNpyAmR4xBzW9mlVS-jcxKRRW-hHYm4/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default GestacaodeAltoRiscoinf;

    




   