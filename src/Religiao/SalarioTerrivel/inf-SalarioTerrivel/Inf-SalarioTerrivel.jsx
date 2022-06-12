import './inf-SalarioTerrivel.css'

function SalarioTerrivelInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cordel"
  
  
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
      tituloo.innerText = partidas.Cordel[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cordel[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cordel[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cordel[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cordel[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cordel[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cordel[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cordel[9].capa);
      document.getElementById('Cordel-capaa10').append(capa);

      document.getElementById('Cordel-tituloo10').append(tituloo);
      document.getElementById('Cordel-Descricao10').append(descricaoo1);
      document.getElementById('Cordel-autor10').append(autoor);
      document.getElementById('Cordel-ano10').append(anoor);
      document.getElementById('Cordel-licenca10').append(licenca);
      document.getElementById('Cordel-tipo10').append(tipoo);
      document.getElementById('Cordel-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Cordel-capaa10' className='Cordel-capa10'><div/>


              <div id='Cordel-titulo10' className='titulo1'>
                <b id='Cordel-tituloo10'>TITULO :</b><br /> 
                <b id='Cordel-autor10'>AUTOR :</b><br />
                <b id='Cordel-ano10'>ANO :</b><br />
                <b id='Cordel-licenca10'>LICENÇA :</b><br />
                <b id='Cordel-tipo10'>TIPO :</b><br /><br />
                <b id='Cordel-formato10'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Cordel-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cordel-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default SalarioTerrivelInf;

    




  