import './inf-BularioVeterinario.css'

function InfBularioVeterinario(){
  const url = "https://appbluemusicguil.herokuapp.com/Medicina"


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
      titulo.innerText = partidas.Medicina[5].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Medicina[5].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Medicina[5].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Medicina[5].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Medicina[5].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Medicina[5].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Medicina[5].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Medicina[5].capa);
      document.getElementById('Medicina-BularioVeterinario').append(capa2);

      document.getElementById('Medicina-tituloo6').append(titulo);
      document.getElementById('Medicina-Descricao6').append(descricao1);
      document.getElementById('Medicina-autor6').append(autor);
      document.getElementById('Medicina-ano6').append(anoo);
      document.getElementById('Medicina-licenca6').append(licensa);
      document.getElementById('Medicina-tipo6').append(tipo);
      document.getElementById('Medicina-formato6').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>

              <div id='Medicina-BularioVeterinario' className='capa1'>


              <div id='Medicina-titulo6' className='titulo1'>
                <b id='Medicina-tituloo6'>TITULO :</b><br /> 
                <b id='Medicina-autor6'>AUTOR :</b><br />
                <b id='Medicina-ano6'>ANO :</b><br />
                <b id='Medicina-licenca6'>LICENÇA :</b><br />
                <b id='Medicina-tipo6'>TIPO :</b><br /><br />
                <b id='Medicina-formato6'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1cYGoBm_bGTKZ6-HgKHclOsTFp29P_kDW/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Medicina-Descricao6' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Medicina-fundoo6'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfBularioVeterinario;

   