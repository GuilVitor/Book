import './inf-Diligencia.css'

function Diligienciainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"
  
  
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
      tituloo.innerText = partidas.Aventura[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[4].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[4].capa);
      document.getElementById('acao-capaa5').append(capa);

      document.getElementById('acao-tituloo5').append(tituloo);
      document.getElementById('acao-Descricao5').append(descricaoo1);
      document.getElementById('acao-autor5').append(autoor);
      document.getElementById('acao-ano5').append(anoor);
      document.getElementById('acao-licenca5').append(licenca);
      document.getElementById('acao-tipo5').append(tipoo);
      document.getElementById('acao-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa5' className='capa1'>


              <div id='acao-titulo5' className='titulo1'>
                <b id='acao-tituloo5'>TITULO :</b><br /> 
                <b id='acao-autor5'>AUTOR :</b><br />
                <b id='acao-ano5'>ANO :</b><br />
                <b id='acao-licenca5'>LICENÇA :</b><br />
                <b id='acao-tipo5'>TIPO :</b><br /><br />
                <b id='acao-formato5'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1iPjKopEEQH-g5WaHPd8qPT_iBz3rx4Av/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Diligienciainf;

    




   