import './inf-Recorda.css'

function RecordaInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
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
      tituloo.innerText = partidas.Romance[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[9].Descrição;



      document.getElementById('Romance-tituloo10').append(tituloo);
      document.getElementById('Romance-Descricao10').append(descricaoo1);
      document.getElementById('Romance-autor10').append(autoor);
      document.getElementById('Romance-ano10').append(anoor);
      document.getElementById('Romance-licenca10').append(licenca);
      document.getElementById('Romance-tipo10').append(tipoo);
      document.getElementById('Romance-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa10' className='Romance-capa9'><div/>


              <div id='Romance-titulo10' className='titulo1'>
                <b id='Romance-tituloo10'>TITULO :</b><br /> 
                <b id='Romance-autor10'>AUTOR :</b><br />
                <b id='Romance-ano10'>ANO :</b><br />
                <b id='Romance-licenca10'>LICENÇA :</b><br />
                <b id='Romance-tipo10'>TIPO :</b><br /><br />
                <b id='Romance-formato10'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1JPzZH_SJ-mWETFd-z6aAIi-ybzb_qcyj/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Romance-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default RecordaInf;

    




  