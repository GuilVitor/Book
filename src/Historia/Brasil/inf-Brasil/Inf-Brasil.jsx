import './inf-Brasil.css'

function BrasilInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Historia"
  
  
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
      tituloo.innerText = partidas.Historia[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[4].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Historia[4].capa);
      document.getElementById('Historia-capaa1').append(capaa);

      document.getElementById('Historia-tituloo1').append(tituloo);
      document.getElementById('Historia-Descricao1').append(descricaoo1);
      document.getElementById('Historia-autor1').append(autoor);
      document.getElementById('Historia-ano1').append(anoor);
      document.getElementById('Historia-licenca1').append(licenca);
      document.getElementById('Historia-tipo1').append(tipoo);
      document.getElementById('Historia-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa1' className='capa1'>


              <div id='Historia-titulo1' className='titulo1'>
                <b id='Historia-tituloo1'>TITULO :</b><br /> 
                <b id='Historia-autor1'>AUTOR :</b><br />
                <b id='Historia-ano1'>ANO :</b><br />
                <b id='Historia-licenca1'>LICENÇA :</b><br />
                <b id='Historia-tipo1'>TIPO :</b><br /><br />
                <b id='Historia-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1Gkm4tN34AF522wGge6uHpMnt1dH3TtF0/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default BrasilInf;

    




   