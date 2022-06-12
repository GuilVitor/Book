import './inf-lua.css'

function Influa(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"


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
      titulo.innerText = partidas.Aventura[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Aventura[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Aventura[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Aventura[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Aventura[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Aventura[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Aventura[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[2].capa);
      document.getElementById('acaoo-capa3').append(capa);

      document.getElementById('acao-tituloo3').append(titulo);
      document.getElementById('acao-Descricao3').append(descricao1);
      document.getElementById('acao-autor3').append(autor);
      document.getElementById('acao-ano3').append(anoo);
      document.getElementById('acao-licenca3').append(licensa);
      document.getElementById('acao-tipo3').append(tipo);
      document.getElementById('acao-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acaoo-capa3' className='capa1'>


              <div id='acao-titulo3' className='titulo1'>
                <b id='acao-tituloo3'>TITULO :</b><br /> 
                <b id='acao-autor3'>AUTOR :</b><br />
                <b id='acao-ano3'>ANO :</b><br />
                <b id='acao-licenca3'>LICENÇA :</b><br />
                <b id='acao-tipo3'>TIPO :</b><br /><br />
                <b id='acao-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1MdHCDhfE4wiZEZkg9alMZm1vfq_aa_ms/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='acao-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default Influa;

  