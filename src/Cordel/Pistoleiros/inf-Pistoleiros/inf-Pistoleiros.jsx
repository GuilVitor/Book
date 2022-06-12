import './inf-Pistoleiros.css'

function InfPistoleiros(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"


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
      titulo.innerText = partidas.Cordel[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Cordel[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Cordel[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Cordel[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Cordel[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Cordel[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Cordel[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Cordel[5].capa);
      document.getElementById('Cordel-Pistoleiros').append(capa2);

      document.getElementById('Cordel-tituloo6').append(titulo);
      document.getElementById('Cordel-Descricao6').append(descricao1);
      document.getElementById('Cordel-autor6').append(autor);
      document.getElementById('Cordel-ano6').append(anoo);
      document.getElementById('Cordel-licenca6').append(licensa);
      document.getElementById('Cordel-tipo6').append(tipo);
      document.getElementById('Cordel-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Cordel-Pistoleiros' className='capa1'>


              <div id='Cordel-titulo6' className='titulo1'>
                <b id='Cordel-tituloo6'>TITULO : </b><br /> 
                <b id='Cordel-autor6'>AUTOR :</b><br />
                <b id='Cordel-ano6'>ANO :</b><br />
                <b id='Cordel-licenca6'>LICENÇA :</b><br />
                <b id='Cordel-tipo6'>TIPO :</b><br /><br />
                <b id='Cordel-formato6'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/15NuxDNj6PmLX7BfKl30ufRh6e0Sxz2Lq/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 



</div>


   <div id='Cordel-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfPistoleiros;

   