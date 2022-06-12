import './inf-ConceitosdeGenetica.css'

function ConceitosdeGeneticainf(){
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
      var tituloo = document.createElement('h8');
      tituloo.innerText = partidas.Medicina[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Medicina[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Medicina[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Medicina[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Medicina[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Medicina[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Medicina[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[8].capa);
      document.getElementById('Medicina-capaa7').append(capa);

      document.getElementById('Medicina-tituloo7').append(tituloo);
      document.getElementById('Medicina-Descricao7').append(descricaoo1);
      document.getElementById('Medicina-autor7').append(autoor);
      document.getElementById('Medicina-ano7').append(anoor);
      document.getElementById('Medicina-licenca7').append(licenca);
      document.getElementById('Medicina-tipo7').append(tipoo);
      document.getElementById('Medicina-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capaa7' className='capa1'>


              <div id='Medicina-titulo7' className='titulo1'>
                <b id='Medicina-tituloo7'>TITULO :</b><br /> 
                <b id='Medicina-autor7'>AUTOR :</b><br />
                <b id='Medicina-ano7'>ANO :</b><br />
                <b id='Medicina-licenca7'>LICENÇA :</b><br />
                <b id='Medicina-tipo7'>TIPO :</b><br /><br />
                <b id='Medicina-formato7'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1sJsIWAYiLf7AVgV70oasitiChpMMNMLs/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Medicina-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default ConceitosdeGeneticainf;

    




  