import './inf-Fedom.css'

function InfFedom(){
  const url = "https://appbluemusicguil.herokuapp.com/Literatura"


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
      titulo.innerText = partidas.Literatura[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Literatura[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Literatura[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Literatura[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Literatura[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Literatura[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Literatura[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Literatura[5].capa);
      document.getElementById('Literatura-Fedom').append(capa2);

      document.getElementById('Literatura-tituloo6').append(titulo);
      document.getElementById('Literatura-Descricao6').append(descricao1);
      document.getElementById('Literatura-autor6').append(autor);
      document.getElementById('Literatura-ano6').append(anoo);
      document.getElementById('Literatura-licenca6').append(licensa);
      document.getElementById('Literatura-tipo6').append(tipo);
      document.getElementById('Literatura-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Literatura-Fedom' className='capa1'>


              <div id='Literatura-titulo6' className='titulo1'>
                <b id='Literatura-tituloo6'>TITULO : A imortalidade</b><br /> 
                <b id='Literatura-autor6'>AUTOR :</b><br />
                <b id='Literatura-ano6'>ANO :</b><br />
                <b id='Literatura-licenca6'>LICENÇA :</b><br />
                <b id='Literatura-tipo6'>TIPO :</b><br /><br />
                <b id='Literatura-formato6'>FORMATO EM :</b><br />
                <button className='butao-baixar'>BAIXAR</button>



</div>


   <div id='Literatura-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfFedom;

   