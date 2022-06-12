import './inf-voa.css'

function VoaJoaoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Infantis"
  
  
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
      tituloo.innerText = partidas.Infantis[7].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[7].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[7].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[7].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[7].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[7].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[7].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[7].capa);
      document.getElementById('Infantis-capaa5').append(capa);

      document.getElementById('Infantis-tituloo5').append(tituloo);
      document.getElementById('Infantis-Descricao5').append(descricaoo1);
      document.getElementById('Infantis-autorr5').append(autoor);
      document.getElementById('Infantis-ano5').append(anoor);
      document.getElementById('Infantis-licenca5').append(licenca);
      document.getElementById('Infantis-tipo5').append(tipoo);
      document.getElementById('Infantis-formato5').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa5' className='capa1'>


              <div id='Infantis-titulo5' className='titulo1'>
                <b id='Infantis-tituloo5'>TITULO :</b><br /> 
                <b id='Infantis-autorr5'>AUTOR :</b><br />
                <b id='Infantis-ano5'>ANO :</b><br />
                <b id='Infantis-licenca5'>LICENÇA :</b><br />
                <b id='Infantis-tipo5'>TIPO :</b><br /><br />
                <b id='Infantis-formato5'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1JvcyODHp76JetLdfi9aWqUHY8f1q3bOE/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='Infantis-Descricao5' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo5'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default VoaJoaoinf;

    




   