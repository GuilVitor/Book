import './inf-Cinesiologia.css'

function InfCinesiologia(){
  const url = "https://appbluemusicguil.herokuapp.com/Medicina"


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
      titulo.innerText = partidas.Medicina[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Medicina[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Medicina[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Medicina[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Medicina[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Medicina[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Medicina[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Medicina[2].capa);
      document.getElementById('Medicina-capa3').append(capa);

      document.getElementById('Medicina-tituloo3').append(titulo);
      document.getElementById('Medicina-Descricao3').append(descricao1);
      document.getElementById('Medicina-autor3').append(autor);
      document.getElementById('Medicina-ano3').append(anoo);
      document.getElementById('Medicina-licenca3').append(licensa);
      document.getElementById('Medicina-tipo3').append(tipo);
      document.getElementById('Medicina-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Medicina-capa3' className='capa1'>


              <div id='Medicina-titulo3' className='titulo1'>
                <b id='Medicina-tituloo3'>TITULO :</b><br /> 
                <b id='Medicina-autor3'>AUTOR :</b><br />
                <b id='Medicina-ano3'>ANO :</b><br />
                <b id='Medicina-licenca3'>LICENÇA :</b><br />
                <b id='Medicina-tipo3'>TIPO :</b><br /><br />
                <b id='Medicina-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1Zcz7WQdysDIYBKJcIv0wrDRpWMu7ET3J/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>




</div>


   <div id='Medicina-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfCinesiologia;

  