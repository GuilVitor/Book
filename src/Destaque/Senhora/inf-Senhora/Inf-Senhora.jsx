import './inf-Senhora.css'

function Senhorainf(){
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
      tituloo.innerText = partidas.Destaque[5].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[5].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[5].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[5].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[5].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[5].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[5].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[5].capa);
      document.getElementById('capaa6').append(capa);

      document.getElementById('tituloo6').append(tituloo);
      document.getElementById('Descricao6').append(descricaoo1);
      document.getElementById('autor6').append(autoor);
      document.getElementById('ano6').append(anoor);
      document.getElementById('licenca6').append(licenca);
      document.getElementById('tipo6').append(tipoo);
      document.getElementById('formato6').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa6' className='capa1'>


              <div id='titulo6' className='titulo1'>
                <b id='tituloo6'>TITULO :</b><br /> 
                <b id='autor6'>AUTOR :</b><br />
                <b id='ano6'>ANO :</b><br />
                <b id='licenca6'>LICENÇA :</b><br />
                <b id='tipo6'>TIPO :</b><br /><br />
                <b id='formato6'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/10ZE8yGJ-9il4yi6p6o0vs9ALoDOFJx2P/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo6'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Senhorainf;

    




   