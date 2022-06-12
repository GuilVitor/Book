import './inf-imposto.css'

function InfImposto(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"


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
      titulo.innerText = partidas.Destaque[1].Título;

      var autor = document.createElement('h6');
      autor.innerText = partidas.Destaque[1].Autor;

      var anoo = document.createElement('h6');
      anoo.innerText = partidas.Destaque[1].Ano;

      var licensa = document.createElement('h6');
      licensa.innerText = partidas.Destaque[1].Licença;
    
      var tipo = document.createElement('h6');
      tipo.innerText = partidas.Destaque[1].Tipo;

      var formato = document.createElement('h6');
      formato.innerText = partidas.Destaque[1].Formato;







      var descricao1 = document.createElement('h5');
      descricao1.innerText = partidas.Destaque[1].Descrição;

      var capa2 = document.createElement('img');

      capa2.setAttribute('src', partidas.Destaque[1].capa);
      document.getElementById('impostor2').append(capa2);

      document.getElementById('titulo2-impostor').append(titulo);
      document.getElementById('Descricao2').append(descricao1);
      document.getElementById('autor2').append(autor);
      document.getElementById('ano2').append(anoo);
      document.getElementById('licenca2').append(licensa);
      document.getElementById('tipo2').append(tipo);
      document.getElementById('formato2').append(formato);
    }
  
  InfImpostor();
  
  
    return (
     
        <>
       <div className='inf2'>
         <div className='max-widht2'> 

         <div className='center2'>

          <div className='perfil2'>
              <div id='impostor2' className='capa1'>


              <div id='titulo2' className='titulo1'>
                <b id='titulo2-impostor'>TITULO :</b><br /> 
                <b id='autor2'>AUTOR :</b><br />
                <b id='ano2'>ANO :</b><br />
                <b id='licenca2'>LICENÇA :</b><br />
                <b id='tipo2'>TIPO :</b><br /><br />
                <b id='formato2'>FORMATO EM :</b><br />
               <a href="https://drive.google.com/file/d/1JwTUSXQUFQfg9x5cnqNIhIvD4G0hsnJi/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a>



</div>


   <div id='Descricao2' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo2'>

</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
  
    );

}
  
   export default InfImposto;

   