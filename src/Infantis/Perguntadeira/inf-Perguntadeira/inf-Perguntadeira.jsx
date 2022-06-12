import './inf-Perguntadeira.css'

function InfPerguntadeira(){
  const url = "https://appbluemusicguil.herokuapp.com/Infantis"


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
      titulo.innerText = partidas.Infantis[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Infantis[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Infantis[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Infantis[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Infantis[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Infantis[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Infantis[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Infantis[5].capa);
      document.getElementById('Infantis-Perguntadeira').append(capa2);

      document.getElementById('Infantis-tituloo6').append(titulo);
      document.getElementById('Infantis-Descricao6').append(descricao1);
      document.getElementById('Infantis-autor6').append(autor);
      document.getElementById('Infantis-ano6').append(anoo);
      document.getElementById('Infantis-licenca6').append(licensa);
      document.getElementById('Infantis-tipo6').append(tipo);
      document.getElementById('Infantis-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Infantis-Perguntadeira' className='capa1'>


              <div id='Infantis-titulo6' className='titulo1'>
                <b id='Infantis-tituloo6'>TITULO :</b><br /> 
                <b id='Infantis-autor6'>AUTOR :</b><br />
                <b id='Infantis-ano6'>ANO :</b><br />
                <b id='Infantis-licenca6'>LICENÇA :</b><br />
                <b id='Infantis-tipo6'>TIPO :</b><br /><br />
                <b id='Infantis-formato6'>FORMATO EM :</b><br />
               <a href="https://drive.google.com/file/d/1D7Z5NYal8tHzd7O0AH3sN35Iq6Y9MllR/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 



</div>


   <div id='Infantis-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfPerguntadeira;

   