import './inf-livro.css'

function Inflivro(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"


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
      var titulo = document.createElement('h6');
      titulo.innerText = partidas.Destaque[0].titulo;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Destaque[0].autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Destaque[0].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Destaque[0].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Destaque[0].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Destaque[0].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Destaque[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[0].capa);
      document.getElementById('capa1').append(capa);

      document.getElementById('titulo1').append(titulo);
      document.getElementById('Descricao1').append(descricao1);
      document.getElementById('autor1').append(autor);
      document.getElementById('ano1').append(anoo);
      document.getElementById('licenca1').append(licensa);
      document.getElementById('tipo1').append(tipo);
      document.getElementById('formato1').append(formato);
    }
  
  buscarPartidas();
  
  
    return (
     
        <>
       <div className='inf'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capa1' className='capa1'>


              <div id='titulo' className='titulo1'>
                <b id='titulo1'>TITULO :</b><br /> 
                <b id='autor1'>AUTOR :</b><br />
                <b id='ano1'>ANO :</b><br />
                <b id='licenca1'>LICENÇA :</b><br />
                <b id='tipo1'>TIPO :</b><br /><br />
                <b id='formato1'>FORMATO EM :</b><br />
                <a href="https://drive.google.com/file/d/1TWBYL4gpJEkfArpIhnIGxP_8z2wtVMb-/view?usp=sharing "> <button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default Inflivro;

  