import './inf-Trono.css'

function InfTrono(){
  const url = "https://appbluemusicguil.herokuapp.com/Historia"


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
      titulo.innerText = partidas.Historia[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Historia[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Historia[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Historia[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Historia[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Historia[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Historia[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Historia[5].capa);
      document.getElementById('Historia-Trono').append(capa2);

      document.getElementById('Historia-tituloo6').append(titulo);
      document.getElementById('Historia-Descricao6').append(descricao1);
      document.getElementById('Historia-autor6').append(autor);
      document.getElementById('Historia-ano6').append(anoo);
      document.getElementById('Historia-licenca6').append(licensa);
      document.getElementById('Historia-tipo6').append(tipo);
      document.getElementById('Historia-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Historia-Trono' className='capa1'>


              <div id='Historia-titulo6' className='titulo1'>
                <b id='Historia-tituloo6'>TITULO :</b><br /> 
                <b id='Historia-autor6'>AUTOR :</b><br />
                <b id='Historia-ano6'>ANO :</b><br />
                <b id='Historia-licenca6'>LICENÇA :</b><br />
                <b id='Historia-tipo6'>TIPO :</b><br /><br />
                <b id='Historia-formato6'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1aflFTCQSHQ_Damwrk-_WNbdscyCgYuji/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Historia-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfTrono;

   