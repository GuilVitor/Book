import './inf-Tentativa.css'

function Tentativainf(){
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
      tituloo.innerText = partidas.Destaque[2].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[2].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[2].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[2].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[2].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[2].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[2].capa);
      document.getElementById('capaa3').append(capa);

      document.getElementById('tituloo3').append(tituloo);
      document.getElementById('Descricao3').append(descricaoo1);
      document.getElementById('autor3').append(autoor);
      document.getElementById('ano3').append(anoor);
      document.getElementById('licenca3').append(licenca);
      document.getElementById('tipo3').append(tipoo);
      document.getElementById('formato3').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa3' className='capa1'>


              <div id='titulo3' className='titulo1'>
                <b id='tituloo3'>TITULO :</b><br /> 
                <b id='autor3'>AUTOR :</b><br />
                <b id='ano3'>ANO :</b><br />
                <b id='licenca3'>LICENÇA :</b><br />
                <b id='tipo3'>TIPO :</b><br /><br />
                <b id='formato3'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1qz65ZaTwZy9Kb_5h1ipj6Mg2Ve-tlqFE/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo3'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Tentativainf;

    




   