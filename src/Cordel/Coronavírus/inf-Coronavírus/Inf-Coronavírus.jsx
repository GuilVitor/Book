import './inf-Coronavírus.css'

function Coronavírusinf(){
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
      tituloo.innerText = partidas.Cordel[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[0].capa);
      document.getElementById('Cordel-capaa0').append(capa);

      document.getElementById('Cordel-tituloo0').append(tituloo);
      document.getElementById('Cordel-Descricao0').append(descricaoo1);
      document.getElementById('Cordel-autor0').append(autoor);
      document.getElementById('Cordel-ano0').append(anoor);
      document.getElementById('Cordel-licenca0').append(licenca);
      document.getElementById('Cordel-tipo0').append(tipoo);
      document.getElementById('Cordel-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa0' className='capa1'>


              <div id='Cordel-titulo0' className='titulo1'>
                <b id='Cordel-tituloo0'>TITULO :</b><br /> 
                <b id='Cordel-autor0'>AUTOR :</b><br />
                <b id='Cordel-ano0'>ANO :</b><br />
                <b id='Cordel-licenca0'>LICENÇA :</b><br />
                <b id='Cordel-tipo0'>TIPO :</b><br /><br />
                <b id='Cordel-formato0'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1wZR9CuZu23fDf2hA00AhKjuvd4QxDkVr/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Cordel-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Coronavírusinf;

    




   