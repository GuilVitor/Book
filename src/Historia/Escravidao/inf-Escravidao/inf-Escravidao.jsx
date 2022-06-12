import './inf-Escravidao.css'

function InfEscravidao(){
  const url = "https://appbluemusicguil.herokuapp.com/Historia"


  function buscarPartidas() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarPartidas(obj);
    })
  })
  .catch()
  }
  function mostrarPartidas(partidas) {
    console.log(partidas, "Isso é partidas")
      var titulo = document.createElement('h6');
      titulo.innerText = partidas.Historia[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Historia[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Historia[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Historia[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Historia[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Historia[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Historia[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[2].capa);
      document.getElementById('Historia-capa3').append(capa);

      document.getElementById('Historia-tituloo3').append(titulo);
      document.getElementById('Historia-Descricao3').append(descricao1);
      document.getElementById('Historia-autor3').append(autor);
      document.getElementById('Historia-ano3').append(anoo);
      document.getElementById('Historia-licenca3').append(licensa);
      document.getElementById('Historia-tipo3').append(tipo);
      document.getElementById('Historia-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capa3' className='capa1'>


              <div id='Historia-titulo3' className='titulo1'>
                <b id='Historia-tituloo3'>TITULO :</b><br /> 
                <b id='Historia-autor3'>AUTOR :</b><br />
                <b id='Historia-ano3'>ANO :</b><br />
                <b id='Historia-licenca3'>LICENÇA :</b><br />
                <b id='Historia-tipo3'>TIPO :</b><br /><br />
                <b id='Historia-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1QRxHVIZir1ZX5d0Ibe9dqGDu7aoZ_L7n/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>




</div>


   <div id='Historia-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfEscravidao;

  