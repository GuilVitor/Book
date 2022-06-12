import './inf-Abolicao.css'

function AbolicaoInf(){
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
      tituloo.innerText = partidas.Historia[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Historia[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Historia[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Historia[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Historia[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Historia[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Historia[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Historia[1].capa);
      document.getElementById('Historia-capaa8').append(capa);

      document.getElementById('Historia-tituloo8').append(tituloo);
      document.getElementById('Historia-Descricao8').append(descricaoo1);
      document.getElementById('Historia-autor8').append(autoor);
      document.getElementById('Historia-ano8').append(anoor);
      document.getElementById('Historia-licenca8').append(licenca);
      document.getElementById('Historia-tipo8').append(tipoo);
      document.getElementById('Historia-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Historia-capaa8' className='capa1'>


              <div id='Historia-titulo8' className='titulo1'>
                <b id='Historia-tituloo8'>TITULO :</b><br /> 
                <b id='Historia-autor8'>AUTOR :</b><br />
                <b id='Historia-ano8'>ANO :</b><br />
                <b id='Historia-licenca8'>LICENÇA :</b><br />
                <b id='Historia-tipo8'>TIPO :</b><br /><br />
                <b id='Historia-formato8'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1rwaqZTxoxFFpol8SvsDFYtORX2B1_eqt/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Historia-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Historia-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default AbolicaoInf;

    




   