import './inf-NovenaNatal.css'

function InfNovenaNatal(){
  const url = "https://appbluemusicguil.herokuapp.com/Religiao"


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
      titulo.innerText = partidas.Religiao[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Religiao[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Religiao[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Religiao[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Religiao[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Religiao[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Religiao[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[2].capa);
      document.getElementById('Religiao-capa3').append(capa);

      document.getElementById('Religiao-tituloo3').append(titulo);
      document.getElementById('Religiao-Descricao3').append(descricao1);
      document.getElementById('Religiao-autor3').append(autor);
      document.getElementById('Religiao-ano3').append(anoo);
      document.getElementById('Religiao-licenca3').append(licensa);
      document.getElementById('Religiao-tipo3').append(tipo);
      document.getElementById('Religiao-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capa3' className='capa1'>


              <div id='Religiao-titulo3' className='titulo1'>
                <b id='Religiao-tituloo3'>TITULO :</b><br /> 
                <b id='Religiao-autor3'>AUTOR :</b><br />
                <b id='Religiao-ano3'>ANO :</b><br />
                <b id='Religiao-licenca3'>LICENÇA :</b><br />
                <b id='Religiao-tipo3'>TIPO :</b><br /><br />
                <b id='Religiao-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1z9Vqx3qkHCbakg1WSH4tfHylZaD_XR2s/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>




</div>


   <div id='Religiao-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundoo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfNovenaNatal;

  