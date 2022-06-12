import './inf-Fluminense.css'

function InfFluminense(){
  const url = "https://appbluemusicguil.herokuapp.com/Literatura"


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
      titulo.innerText = partidas.Literatura[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Literatura[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Literatura[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Literatura[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Literatura[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Literatura[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Literatura[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[2].capa);
      document.getElementById('Literatura-capa3').append(capa);

      document.getElementById('Literatura-tituloo3').append(titulo);
      document.getElementById('Literatura-Descricao3').append(descricao1);
      document.getElementById('Literatura-autor3').append(autor);
      document.getElementById('Literatura-ano3').append(anoo);
      document.getElementById('Literatura-licenca3').append(licensa);
      document.getElementById('Literatura-tipo3').append(tipo);
      document.getElementById('Literatura-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capa3' className='capa1'>


              <div id='Literatura-titulo3' className='titulo1'>
                <b id='Literatura-tituloo3'>TITULO :</b><br /> 
                <b id='Literatura-autor3'>AUTOR :</b><br />
                <b id='Literatura-ano3'>ANO :</b><br />
                <b id='Literatura-licenca3'>LICENÇA :</b><br />
                <b id='Literatura-tipo3'>TIPO :</b><br /><br />
                <b id='Literatura-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1f_cq63VZ9VoknFBJD-XWd_h3l3ZrtDSD/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>




</div>


   <div id='Literatura-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundoo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfFluminense;

  