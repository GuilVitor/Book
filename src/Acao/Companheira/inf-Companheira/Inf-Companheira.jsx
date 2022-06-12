import './inf-Companheira.css'

function CompanheiroInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"
  
  
  function infTentativa() {
    fetch(url)
    .then(resposta => {
      resposta.json()
      .then(obj => {
      mostrarTentativa(obj);
    })
  })
  .catch()
  }
  function mostrarTentativa(partidas) {
      var tituloo = document.createElement('h6');
      tituloo.innerText = partidas.Aventura[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[9].capa);
      document.getElementById('acao-capaa10').append(capa);

      document.getElementById('acao-tituloo10').append(tituloo);
      document.getElementById('acao-Descricao10').append(descricaoo1);
      document.getElementById('acao-autor10').append(autoor);
      document.getElementById('acao-ano10').append(anoor);
      document.getElementById('acao-licenca10').append(licenca);
      document.getElementById('acao-tipo10').append(tipoo);
      document.getElementById('acao-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa10' className='capa1'>


              <div id='acao-titulo10' className='titulo1'>
                <b id='acao-tituloo10'>TITULO :</b><br /> 
                <b id='acao-autor10'>AUTOR :</b><br />
                <b id='acao-ano10'>ANO :</b><br />
                <b id='acao-licenca10'>LICENÇA :</b><br />
                <b id='acao-tipo10'>TIPO :</b><br /><br />
                <b id='acao-formato10'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1o1t5EsYZ10JHOd9WE3vLGXqQSADvY7ev/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='acao-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CompanheiroInf;

    




  