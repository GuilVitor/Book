import './inf-ComoEra.css'

function InfComoEra(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"


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
      titulo.innerText = partidas.Romance[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Romance[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Romance[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Romance[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Romance[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Romance[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Romance[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[2].capa);
      document.getElementById('Romance-capa3').append(capa);

      document.getElementById('Romance-tituloo3').append(titulo);
      document.getElementById('Romance-Descricao3').append(descricao1);
      document.getElementById('Romance-autor3').append(autor);
      document.getElementById('Romance-ano3').append(anoo);
      document.getElementById('Romance-licenca3').append(licensa);
      document.getElementById('Romance-tipo3').append(tipo);
      document.getElementById('Romance-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capa3' className='capa1'>


              <div id='Romance-titulo3' className='titulo1'>
                <b id='Romance-tituloo3'>TITULO :</b><br /> 
                <b id='Romance-autor3'>AUTOR :</b><br />
                <b id='Romance-ano3'>ANO :</b><br />
                <b id='Romance-licenca3'>LICENÇA :</b><br />
                <b id='Romance-tipo3'>TIPO :</b><br /><br />
                <b id='Romance-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1EzGFjsONJlSVTA1nGYjfazcaBfbhIQwE/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Romance-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfComoEra;

  