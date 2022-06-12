import './inf-SinodoApocalipse.css'

function InfSinodoApocalipse(){
  const url = "https://appbluemusicguil.herokuapp.com/Religiao"


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
      titulo.innerText = partidas.Religiao[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Religiao[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Religiao[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Religiao[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Religiao[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Religiao[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Religiao[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Religiao[5].capa);
      document.getElementById('Religiao-SinodoApocalipse').append(capa2);

      document.getElementById('Religiao-tituloo6').append(titulo);
      document.getElementById('Religiao-Descricao6').append(descricao1);
      document.getElementById('Religiao-autor6').append(autor);
      document.getElementById('Religiao-ano6').append(anoo);
      document.getElementById('Religiao-licenca6').append(licensa);
      document.getElementById('Religiao-tipo6').append(tipo);
      document.getElementById('Religiao-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Religiao-SinodoApocalipse' className='capa1'>


              <div id='Religiao-titulo6' className='titulo1'>
                <b id='Religiao-tituloo6'>TITULO : </b><br /> 
                <b id='Religiao-autor6'>AUTOR :</b><br />
                <b id='Religiao-ano6'>ANO :</b><br />
                <b id='Religiao-licenca6'>LICENÇA :</b><br />
                <b id='Religiao-tipo6'>TIPO :</b><br /><br />
                <b id='Religiao-formato6'>FORMATO EM :</b><br />
               <a href="https://drive.google.com/file/d/1VJUOy971ichCG5zKogO00OYU3LxoYITY/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Religiao-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfSinodoApocalipse;

   