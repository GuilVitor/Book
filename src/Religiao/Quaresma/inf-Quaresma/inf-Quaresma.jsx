import './inf-Quaresma.css'

function QuaresmaInf(){
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
      tituloo.innerText = partidas.Religiao[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[1].capa);
      document.getElementById('Religiao-capaa8').append(capa);

      document.getElementById('Religiao-tituloo8').append(tituloo);
      document.getElementById('Religiao-Descricao8').append(descricaoo1);
      document.getElementById('Religiao-autor8').append(autoor);
      document.getElementById('Religiao-ano8').append(anoor);
      document.getElementById('Religiao-licenca8').append(licenca);
      document.getElementById('Religiao-tipo8').append(tipoo);
      document.getElementById('Religiao-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capaa8' className='capa1'>


              <div id='Religiao-titulo8' className='titulo1'>
                <b id='Religiao-tituloo8'>TITULO :</b><br /> 
                <b id='Religiao-autor8'>AUTOR :</b><br />
                <b id='Religiao-ano8'>ANO :</b><br />
                <b id='Religiao-licenca8'>LICENÇA :</b><br />
                <b id='Religiao-tipo8'>TIPO :</b><br /><br />
                <b id='Religiao-formato8'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1NyZJsrop8-87y6nYodLuaRQTdSLUOybZ/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Religiao-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default QuaresmaInf;

    




   