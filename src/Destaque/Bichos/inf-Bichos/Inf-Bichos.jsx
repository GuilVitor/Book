import './inf-Bichos.css'

function BichoInf(){
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
      tituloo.innerText = partidas.Destaque[8].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[8].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[8].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[8].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[8].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[8].capa);
      document.getElementById('capaa9').append(capa);

      document.getElementById('tituloo9').append(tituloo);
      document.getElementById('Descricao9').append(descricaoo1);
      document.getElementById('autor9').append(autoor);
      document.getElementById('ano9').append(anoor);
      document.getElementById('licenca9').append(licenca);
      document.getElementById('tipo9').append(tipoo);
      document.getElementById('formato9').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa9' className='capa1'>


              <div id='titulo9' className='titulo1'>
                <b id='tituloo9'>TITULO :</b><br /> 
                <b id='autor9'>AUTOR :</b><br />
                <b id='ano9'>ANO :</b><br />
                <b id='licenca9'>LICENÇA :</b><br />
                <b id='tipo9'>TIPO :</b><br /><br />
                <b id='formato9'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1LOdnF9j4nrdt2AA0-1pxhZE6UVzK2XHM/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Descricao9' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo9'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default BichoInf;

    




   