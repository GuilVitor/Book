import './inf-Ingles-Iniciantes.css'

function InfInglesIniciantes(){
  const url = "https://appbluemusicguil.herokuapp.com/Cursos"


  function InfImpostor() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarImpostor(obj);
    })
  })
  .catch()
  }
  function mostrarImpostor(partidas) {
    console.log(partidas, "Isso é partidas")
      var titulo = document.createElement('h6');
      titulo.innerText = partidas.Cursos[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Cursos[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Cursos[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Cursos[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Cursos[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Cursos[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Cursos[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Cursos[5].cursos);
      document.getElementById('Cursos-InglesIniciantes').append(capa2);

      document.getElementById('Cursos-tituloo6').append(titulo);
      document.getElementById('Cursos-Descricao6').append(descricao1);
      document.getElementById('Cursos-autor6').append(autor);
      document.getElementById('Cursos-ano6').append(anoo);
      document.getElementById('Cursos-licenca6').append(licensa);
      document.getElementById('Cursos-tipo6').append(tipo);
      document.getElementById('Cursos-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Cursos-InglesIniciantes' className='capa1'>


              <div id='Cursos-titulo6' className='titulo1'>
                <b id='Cursos-tituloo6'>TITULO :</b><br /> 
                <b id='Cursos-autor6'>AUTOR :</b><br />
                <b id='Cursos-ano6'>ANO :</b><br />
                <b id='Cursos-licenca6'>LICENÇA :</b><br />
                <b id='Cursos-tipo6'>TIPO :</b><br /><br />
                <b id='Cursos-formato6'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1IcsNV17VWlgkfywKb_nyMZW_JCV6TKux/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Cursos-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfInglesIniciantes;

   