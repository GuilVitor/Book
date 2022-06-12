import './inf-EmbriologiaHumana.css'

function EmbriologiaHumanainf(){
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
      tituloo.innerText = partidas.Medicina[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Medicina[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Medicina[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Medicina[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Medicina[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Medicina[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[0].capa);
      document.getElementById('Medicina-capaa0').append(capa);

      document.getElementById('Medicina-tituloo0').append(tituloo);
      document.getElementById('Medicina-Descricao0').append(descricaoo1);
      document.getElementById('Medicina-autor0').append(autoor);
      document.getElementById('Medicina-ano0').append(anoor);
      document.getElementById('Medicina-licenca0').append(licenca);
      document.getElementById('Medicina-tipo0').append(tipoo);
      document.getElementById('Medicina-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa0' className='capa1'>


              <div id='Medicina-titulo0' className='titulo1'>
                <b id='Medicina-tituloo0'>TITULO :</b><br /> 
                <b id='Medicina-autor0'>AUTOR :</b><br />
                <b id='Medicina-ano0'>ANO :</b><br />
                <b id='Medicina-licenca0'>LICENÇA :</b><br />
                <b id='Medicina-tipo0'>TIPO :</b><br /><br />
                <b id='Medicina-formato0'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1UQchZTDEQ8BxrHxi4ghfWXhGzyU0lx7Y/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default EmbriologiaHumanainf;

    




   