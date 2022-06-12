import './inf-Fogo.css'

function Fogoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
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
      tituloo.innerText = partidas.Romance[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[1].capa);
      document.getElementById('Fogo-capaa1').append(capa);

      document.getElementById('Fogo-tituloo1').append(tituloo);
      document.getElementById('Fogo-Descricao1').append(descricaoo1);
      document.getElementById('Fogo-autor1').append(autoor);
      document.getElementById('Fogo-ano1').append(anoor);
      document.getElementById('Fogo-licenca1').append(licenca);
      document.getElementById('Fogo-tipo1').append(tipoo);
      document.getElementById('Fogo-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Fogo-capaa1' className='capa1'>


              <div id='Fogo-titulo1' className='titulo1'>
                <b id='Fogo-tituloo1'>TITULO :</b><br /> 
                <b id='Fogo-autor1'>AUTOR :</b><br />
                <b id='Fogo-ano1'>ANO :</b><br />
                <b id='Fogo-licenca1'>LICENÇA :</b><br />
                <b id='Fogo-tipo1'>TIPO :</b><br /><br />
                <b id='Fogo-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1SA-X5c_DA1RhL9VvQ0mtslEwhRyH4AbH/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Fogo-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Fogo-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Fogoinf;

    




  