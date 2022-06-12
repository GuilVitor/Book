import './inf-Porquinhos.css'

function PorquinhosInf(){
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
      tituloo.innerText = partidas.Infantis[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[9].capa);
      document.getElementById('Infantis-capaa10').append(capa);

      document.getElementById('Infantis-tituloo10').append(tituloo);
      document.getElementById('Infantis-Descricao10').append(descricaoo1);
      document.getElementById('Infantis-autor10').append(autoor);
      document.getElementById('Infantis-ano10').append(anoor);
      document.getElementById('Infantis-licenca10').append(licenca);
      document.getElementById('Infantis-tipo10').append(tipoo);
      document.getElementById('Infantis-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa10' className='Infantis-capa9'><div/>


              <div id='Infantis-titulo10' className='titulo1'>
                <b id='Infantis-tituloo10'>TITULO :</b><br /> 
                <b id='Infantis-autor10'>AUTOR :</b><br />
                <b id='Infantis-ano10'>ANO :</b><br />
                <b id='Infantis-licenca10'>LICENÇA :</b><br />
                <b id='Infantis-tipo10'>TIPO :</b><br /><br />
                <b id='Infantis-formato10'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1eFRKoHWsiWS0-tEar4BDmHXoJE_21IDD/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button> </a> 

             


</div>


   <div id='Infantis-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default PorquinhosInf;

    




  