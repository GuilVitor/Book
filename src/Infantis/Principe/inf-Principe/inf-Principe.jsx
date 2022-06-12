import './inf-Principe.css'

function InfPrincipe(){
  const url = "https://appbluemusicguil.herokuapp.com/Infantis"


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
      titulo.innerText = partidas.Infantis[2].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Infantis[2].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Infantis[2].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Infantis[2].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Infantis[2].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Infantis[2].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Infantis[2].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[2].capa);
      document.getElementById('Infantis-capa3').append(capa);

      document.getElementById('Infantis-tituloo3').append(titulo);
      document.getElementById('Infantis-Descricao3').append(descricao1);
      document.getElementById('Infantis-autor3').append(autor);
      document.getElementById('Infantis-ano3').append(anoo);
      document.getElementById('Infantis-licenca3').append(licensa);
      document.getElementById('Infantis-tipo3').append(tipo);
      document.getElementById('Infantis-formato3').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capa3' className='capa1'>


              <div id='Infantis-titulo3' className='titulo1'>
                <b id='Infantis-tituloo3'>TITULO :</b><br /> 
                <b id='Infantis-autor3'>AUTOR :</b><br />
                <b id='Infantis-ano3'>ANO :</b><br />
                <b id='Infantis-licenca3'>LICENÇA :</b><br />
                <b id='Infantis-tipo3'>TIPO :</b><br /><br />
                <b id='Infantis-formato3'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/17kZKR7q89J8hGSzlHmTdFOiQPS3OrCfU/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Infantis-Descricao3' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo3'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfPrincipe;

  