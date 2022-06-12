import './inf-Maluquinho.css'

function Maluquinhoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Infantis"
  
  
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
      tituloo.innerText = partidas.Infantis[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[1].capa);
      document.getElementById('Maluquinho-capaa1').append(capa);

      document.getElementById('Maluquinho-tituloo1').append(tituloo);
      document.getElementById('Maluquinho-Descricao1').append(descricaoo1);
      document.getElementById('Maluquinho-autor1').append(autoor);
      document.getElementById('Maluquinho-ano1').append(anoor);
      document.getElementById('Maluquinho-licenca1').append(licenca);
      document.getElementById('Maluquinho-tipo1').append(tipoo);
      document.getElementById('Maluquinho-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Maluquinho-capaa1' className='capa1'>


              <div id='Maluquinho-titulo1' className='titulo1'>
                <b id='Maluquinho-tituloo1'>TITULO :</b><br /> 
                <b id='Maluquinho-autor1'>AUTOR :</b><br />
                <b id='Maluquinho-ano1'>ANO :</b><br />
                <b id='Maluquinho-licenca1'>LICENÇA :</b><br />
                <b id='Maluquinho-tipo1'>TIPO :</b><br /><br />
                <b id='Maluquinho-formato1'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1ML1gEl0kKm6on3ecItL3W0L7AKxNvDnf/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Maluquinho-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Maluquinho-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Maluquinhoinf;

    




  