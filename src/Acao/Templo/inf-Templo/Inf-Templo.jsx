import './inf-Templo.css'

function Temploinf(){
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
      tituloo.innerText = partidas.Aventura[8].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[8].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[8].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[8].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[8].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[8].capa);
      document.getElementById('acao-capaa9').append(capa);

      document.getElementById('acao-tituloo9').append(tituloo);
      document.getElementById('acao-Descricao9').append(descricaoo1);
      document.getElementById('acao-autor9').append(autoor);
      document.getElementById('acao-ano9').append(anoor);
      document.getElementById('acao-licenca9').append(licenca);
      document.getElementById('acao-tipo9').append(tipoo);
      document.getElementById('acao-formato9').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa9' className='capa1'>


              <div id='acao-titulo9' className='titulo1'>
                <b id='acao-tituloo9'>TITULO :</b><br /> 
                <b id='acao-autor9'>AUTOR :</b><br />
                <b id='acao-ano9'>ANO :</b><br />
                <b id='acao-licenca9'>LICENÇA :</b><br />
                <b id='acao-tipo9'>TIPO :</b><br /><br />
                <b id='acao-formato9'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1EwXikiWmclmc0PqNoQ-yOofxUDFZqVdz/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao9' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo9'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Temploinf;

    




   