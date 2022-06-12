import './inf-BíbliaCatólica.css'

function BíbliaCatólicainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Religiao"
  
  
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
      tituloo.innerText = partidas.Religiao[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[3].capa);
      document.getElementById('Religiao-capaa4').append(capa);

      document.getElementById('Religiao-tituloo4').append(tituloo);
      document.getElementById('Religiao-Descricao4').append(descricaoo1);
      document.getElementById('Religiao-autor4').append(autoor);
      document.getElementById('Religiao-ano4').append(anoor);
      document.getElementById('Religiao-licenca4').append(licenca);
      document.getElementById('Religiao-tipo4').append(tipoo);
      document.getElementById('Religiao-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capaa4' className='capa1'>


              <div id='Religiao-titulo4' className='titulo1'>
                <b id='Religiao-tituloo4'>TITULO :</b><br /> 
                <b id='Religiao-autor4'>AUTOR :</b><br />
                <b id='Religiao-ano4'>ANO :</b><br />
                <b id='Religiao-licenca4'>LICENÇA :</b><br />
                <b id='Religiao-tipo4'>TIPO :</b><br /><br />
                <b id='Religiao-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1azXz-SAJVNwmgowKkO907T4Mv23hsWcc/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Religiao-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default BíbliaCatólicainf;

    




   