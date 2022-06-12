import './inf-NossosCordeis.css'

function InfNossosCordeis(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"


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
      titulo.innerText = partidas.Cordel[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Cordel[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Cordel[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Cordel[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Cordel[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Cordel[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Cordel[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[2].capa);
      document.getElementById('Cordel-capa3').append(capa);

      document.getElementById('Cordel-tituloo3').append(titulo);
      document.getElementById('Cordel-Descricao3').append(descricao1);
      document.getElementById('Cordel-autor3').append(autor);
      document.getElementById('Cordel-ano3').append(anoo);
      document.getElementById('Cordel-licenca3').append(licensa);
      document.getElementById('Cordel-tipo3').append(tipo);
      document.getElementById('Cordel-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capa3' className='capa1'>


              <div id='Cordel-titulo3' className='titulo1'>
                <b id='Cordel-tituloo3'>TITULO :</b><br /> 
                <b id='Cordel-autor3'>AUTOR :</b><br />
                <b id='Cordel-ano3'>ANO :</b><br />
                <b id='Cordel-licenca3'>LICENÇA :</b><br />
                <b id='Cordel-tipo3'>TIPO :</b><br /><br />
                <b id='Cordel-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/16oMsWQXoqf1CNgX5uC_ZtSDoN22NQKGC/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a> 




</div>


   <div id='Cordel-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfNossosCordeis;

  