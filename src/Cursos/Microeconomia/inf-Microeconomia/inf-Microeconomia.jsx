import './inf-Microeconomia.css'

function InfMicroeconomia(){
  const url = "https://appbluemusicguil.herokuapp.com/Cursos"


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
      titulo.innerText = partidas.Cursos[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Cursos[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Cursos[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Cursos[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Cursos[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Cursos[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Cursos[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[2].capa);
      document.getElementById('Cursos-capa3').append(capa);

      document.getElementById('Cursos-tituloo3').append(titulo);
      document.getElementById('Cursos-Descricao3').append(descricao1);
      document.getElementById('Cursos-autor3').append(autor);
      document.getElementById('Cursos-ano3').append(anoo);
      document.getElementById('Cursos-licenca3').append(licensa);
      document.getElementById('Cursos-tipo3').append(tipo);
      document.getElementById('Cursos-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cursos-capa3' className='capa1'>


              <div id='Cursos-titulo3' className='titulo1'>
                <b id='Cursos-tituloo3'>TITULO :</b><br /> 
                <b id='Cursos-autor3'>AUTOR :</b><br />
                <b id='Cursos-ano3'>ANO :</b><br />
                <b id='Cursos-licenca3'>LICENÇA :</b><br />
                <b id='Cursos-tipo3'>TIPO :</b><br /><br />
                <b id='Cursos-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/16DsO5l47YWOqQWrQVzyUcjq14HA-yTVs/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>




</div>


   <div id='Cursos-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfMicroeconomia;

  