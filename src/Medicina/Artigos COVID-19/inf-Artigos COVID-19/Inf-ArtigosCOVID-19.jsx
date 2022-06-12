import './inf-ArtigosCOVID-19.css'

function ArtigosCOVID19Inf(){
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
      tituloo.innerText = partidas.Medicina[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[9].capa);
      document.getElementById('Medicina-capaa10').append(capa);

      document.getElementById('Medicina-tituloo10').append(tituloo);
      document.getElementById('Medicina-Descricao10').append(descricaoo1);
      document.getElementById('Medicina-autor10').append(autoor);
      document.getElementById('Medicina-ano10').append(anoor);
      document.getElementById('Medicina-licenca10').append(licenca);
      document.getElementById('Medicina-tipo10').append(tipoo);
      document.getElementById('Medicina-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa10' className='Medicina-capa10'><div/>


              <div id='Medicina-titulo10' className='titulo1'>
                <b id='Medicina-tituloo10'>TITULO :</b><br /> 
                <b id='Medicina-autor10'>AUTOR :</b><br />
                <b id='Medicina-ano10'>ANO :</b><br />
                <b id='Medicina-licenca10'>LICENÇA :</b><br />
                <b id='Medicina-tipo10'>TIPO :</b><br /><br />
                <b id='Medicina-formato10'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1bm7kjGmz4kYyqGGlOEtjsW_I2vNQT_rL/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ArtigosCOVID19Inf;

    




  