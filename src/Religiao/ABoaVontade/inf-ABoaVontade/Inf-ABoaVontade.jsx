import './inf-ABoaVontade.css'

function ABoaVontadeinf(){
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
      tituloo.innerText = partidas.Religiao[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[7].Editora;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[7].Autor);
      document.getElementById('ABoaVontade-capaa1').append(capa);

      document.getElementById('ABoaVontade-tituloo1').append(tituloo);
      document.getElementById('ABoaVontade-Descricao1').append(descricaoo1);
      document.getElementById('ABoaVontade-autor1').append(autoor);
      document.getElementById('ABoaVontade-ano1').append(anoor);
      document.getElementById('ABoaVontade-licenca1').append(licenca);
      document.getElementById('ABoaVontade-tipo1').append(tipoo);
      document.getElementById('ABoaVontade-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='ABoaVontade-capaa1' className='capa1'>


              <div id='ABoaVontade-titulo1' className='titulo1'>
                <b id='ABoaVontade-tituloo1'>TITULO :</b><br /> 
                <b id='ABoaVontade-autor1'>EDITORA :</b><br />
                <b id='ABoaVontade-ano1'>ANO DE:</b><br />
                <b id='ABoaVontade-licenca1'>LICENÇA LIVRO:</b><br />
                <b id='ABoaVontade-tipo1'>TIPO DE LIVRO :</b><br /><br />
                <b id='ABoaVontade-formato1'>FORMATO EM :</b><br />

             <a href="https://drive.google.com/file/d/1ZLIMonno1YmBnPL8hkHGHfKasC3jPxbm/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='ABoaVontade-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ABoaVontadeinf;

    




  