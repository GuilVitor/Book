import './inf-Classicos.css'

function Classicosinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Destaque"
  
  
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
      tituloo.innerText = partidas.Destaque[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Destaque[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Destaque[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Destaque[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Destaque[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Destaque[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Destaque[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Destaque[3].capa);
      document.getElementById('capaa4').append(capa);

      document.getElementById('tituloo4').append(tituloo);
      document.getElementById('Descricao4').append(descricaoo1);
      document.getElementById('autor4').append(autoor);
      document.getElementById('ano4').append(anoor);
      document.getElementById('licenca4').append(licenca);
      document.getElementById('tipo4').append(tipoo);
      document.getElementById('formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='capaa4' className='capa1'>


              <div id='titulo4' className='titulo1'>
                <b id='tituloo4'>TITULO :</b><br /> 
                <b id='autor4'>AUTOR :</b><br />
                <b id='ano4'>ANO :</b><br />
                <b id='licenca4'>LICENÇA :</b><br />
                <b id='tipo4'>TIPO :</b><br /><br />
                <b id='formato4'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1YQ9vjUfAnkBnf0ZZE0l353qOl_gwHGsF/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Classicosinf;

    




  