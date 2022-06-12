import './inf-Polvora.css'

function polvorainf(){
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
      tituloo.innerText = partidas.Aventura[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[6].capa);
      document.getElementById('acao-capaa7').append(capa);

      document.getElementById('acao-tituloo7').append(tituloo);
      document.getElementById('acao-Descricao7').append(descricaoo1);
      document.getElementById('acao-autor7').append(autoor);
      document.getElementById('acao-ano7').append(anoor);
      document.getElementById('acao-licenca7').append(licenca);
      document.getElementById('acao-tipo7').append(tipoo);
      document.getElementById('acao-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa7' className='capa1'>


              <div id='acao-titulo7' className='titulo1'>
                <b id='acao-tituloo7'>TITULO :</b><br /> 
                <b id='acao-autor7'>AUTOR :</b><br />
                <b id='acao-ano7'>ANO :</b><br />
                <b id='acao-licenca7'>LICENÇA :</b><br />
                <b id='acao-tipo7'>TIPO :</b><br /><br />
                <b id='acao-formato7'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1Byx0XOBlLeplBKWlMY-adGe0I602l3vn/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default polvorainf;

    




  