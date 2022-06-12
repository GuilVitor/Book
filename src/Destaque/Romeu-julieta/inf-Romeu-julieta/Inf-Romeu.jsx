import './inf-Romeu.css'

function julietainf(){
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
      tituloo.innerText = partidas.Destaque[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[6].capa);
      document.getElementById('capaa7').append(capa);

      document.getElementById('tituloo7').append(tituloo);
      document.getElementById('Descricao7').append(descricaoo1);
      document.getElementById('autor7').append(autoor);
      document.getElementById('ano7').append(anoor);
      document.getElementById('licenca7').append(licenca);
      document.getElementById('tipo7').append(tipoo);
      document.getElementById('formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa7' className='capa1'>


              <div id='titulo7' className='titulo1'>
                <b id='tituloo7'>TITULO :</b><br /> 
                <b id='autor7'>AUTOR :</b><br />
                <b id='ano7'>ANO :</b><br />
                <b id='licenca7'>LICENÇA :</b><br />
                <b id='tipo7'>TIPO :</b><br /><br />
                <b id='formato7'>FORMATO EM :</b><br />

           <a href="https://drive.google.com/file/d/1EZ29wuf0yuKr0oDGLaFEZr25aHsLQFF3/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default julietainf;

    




  