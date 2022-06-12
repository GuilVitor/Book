import './inf-Mulheres.css'

function InfMulheres(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"


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
      titulo.innerText = partidas.Aventura[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Aventura[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Aventura[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Aventura[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Aventura[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Aventura[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Aventura[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Aventura[5].capa);
      document.getElementById('acao-Mulheres').append(capa2);

      document.getElementById('tituloo6').append(titulo);
      document.getElementById('Descricao6').append(descricao1);
      document.getElementById('autor6').append(autor);
      document.getElementById('ano6').append(anoo);
      document.getElementById('licenca6').append(licensa);
      document.getElementById('tipo6').append(tipo);
      document.getElementById('formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='acao-Mulheres' className='capa1'>


              <div id='titulo6' className='titulo1'>
                <b id='tituloo6'>TITULO :</b><br /> 
                <b id='autor6'>AUTOR :</b><br />
                <b id='ano6'>ANO :</b><br />
                <b id='licenca6'>LICENÇA :</b><br />
                <b id='tipo6'>TIPO :</b><br /><br />
                <b id='formato6'>FORMATO EM :</b><br />
              <a href=" https://drive.google.com/file/d/1TbDuPydNf3cReBlfmNJr_4of-q6lr9tJ/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfMulheres;

   