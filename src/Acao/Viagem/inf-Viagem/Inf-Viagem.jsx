import './inf-Viagem.css'

function Viageminf(){
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
      tituloo.innerText = partidas.Aventura[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[1].capa);
      document.getElementById('acao-capaa1').append(capa);

      document.getElementById('acao-tituloo1').append(tituloo);
      document.getElementById('acao-Descricao1').append(descricaoo1);
      document.getElementById('acao-autor1').append(autoor);
      document.getElementById('acao-ano1').append(anoor);
      document.getElementById('acao-licenca1').append(licenca);
      document.getElementById('acao-tipo1').append(tipoo);
      document.getElementById('acao-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa1' className='capa1'>


              <div id='acao-titulo1' className='titulo1'>
                <b id='acao-tituloo1'>TITULO :</b><br /> 
                <b id='acao-autor1'>AUTOR :</b><br />
                <b id='acao-ano1'>ANO :</b><br />
                <b id='acao-licenca1'>LICENÇA :</b><br />
                <b id='acao-tipo1'>TIPO :</b><br /><br />
                <b id='acao-formato1'>FORMATO EM :</b><br />

            <a href=" https://drive.google.com/file/d/1nj4OyW1npdb-_yoWUM6W4XZjJf-U5nHS/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Viageminf;

    




  