import './inf-SemanaSanta.css'

function SemanaSantaInf(){
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
      tituloo.innerText = partidas.Religiao[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[4].Formato;
      
      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[5].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Religiao[4].capa);
      document.getElementById('Religiao-capaa1').append(capaa);

      document.getElementById('Religiao-tituloo1').append(tituloo);
      document.getElementById('Religiao-Descricao1').append(descricaoo1);
      document.getElementById('Religiao-autor1').append(autoor);
      document.getElementById('Religiao-ano1').append(anoor);
      document.getElementById('Religiao-licenca1').append(licenca);
      document.getElementById('Religiao-tipo1').append(tipoo);
      document.getElementById('Religiao-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capaa1' className='capa1'>


              <div id='Religiao-titulo1' className='titulo1'>
                <b id='Religiao-tituloo1'>TITULO :</b><br /> 
                <b id='Religiao-autor1'>AUTOR :</b><br />
                <b id='Religiao-ano1'>ANO :</b><br />
                <b id='Religiao-licenca1'>LICENÇA :</b><br />
                <b id='Religiao-tipo1'>TIPO :</b><br /><br />
                <b id='Religiao-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1xa2p0qwvFYarv5-BZXYVWWXhEk4MKW2Z/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Religiao-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default SemanaSantaInf;

    




   