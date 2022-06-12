import './inf-guerra.css'

function Guerrainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"
  
  
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
      tituloo.innerText = partidas.Destaque[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[4].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[4].capa);
      document.getElementById('capaa5').append(capa);

      document.getElementById('tituloo5').append(tituloo);
      document.getElementById('Descricao5').append(descricaoo1);
      document.getElementById('autor5').append(autoor);
      document.getElementById('ano5').append(anoor);
      document.getElementById('licenca5').append(licenca);
      document.getElementById('tipo5').append(tipoo);
      document.getElementById('formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa5' className='capa1'>


              <div id='titulo5' className='titulo1'>
                <b id='tituloo5'>TITULO :</b><br /> 
                <b id='autor5'>AUTOR :</b><br />
                <b id='ano5'>ANO :</b><br />
                <b id='licenca5'>LICENÇA :</b><br />
                <b id='tipo5'>TIPO :</b><br /><br />
                <b id='formato5'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1oLhvd17qHPFLwcTb0OotL2Br_K7Y7Oxh/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo5'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Guerrainf;

    




   