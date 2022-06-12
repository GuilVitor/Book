import './inf-Eternamente.css'

function InfEternamente(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"


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
      titulo.innerText = partidas.Romance[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Romance[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Romance[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Romance[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Romance[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Romance[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Romance[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Romance[5].capa);
      document.getElementById('Romance-Eternamente').append(capa2);

      document.getElementById('Romance-tituloo6').append(titulo);
      document.getElementById('Romance-Descricao6').append(descricao1);
      document.getElementById('Romance-autor6').append(autor);
      document.getElementById('Romance-ano6').append(anoo);
      document.getElementById('Romance-licenca6').append(licensa);
      document.getElementById('Romance-tipo6').append(tipo);
      document.getElementById('Romance-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Romance-Eternamente' className='capa1'>


              <div id='Romance-titulo6' className='titulo1'>
                <b id='Romance-tituloo6'>TITULO :</b><br /> 
                <b id='Romance-autor6'>AUTOR :</b><br />
                <b id='Romance-ano6'>ANO :</b><br />
                <b id='Romance-licenca6'>LICENÇA :</b><br />
                <b id='Romance-tipo6'>TIPO :</b><br /><br />
                <b id='Romance-formato6'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/15_Qq2lVXkFRs-FAZZ8JjmUtJBCUU093J/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>



</div>


   <div id='Romance-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfEternamente;

   