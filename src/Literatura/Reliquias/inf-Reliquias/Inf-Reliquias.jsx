import './inf-Reliquias.css'

function Reliquiasinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Literatura"
  
  
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
      tituloo.innerText = partidas.Literatura[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[3].capa);
      document.getElementById('Literatura-capaa4').append(capa);

      document.getElementById('Literatura-tituloo4').append(tituloo);
      document.getElementById('Literatura-Descricao4').append(descricaoo1);
      document.getElementById('Literatura-autor4').append(autoor);
      document.getElementById('Literatura-ano4').append(anoor);
      document.getElementById('Literatura-licenca4').append(licenca);
      document.getElementById('Literatura-tipo4').append(tipoo);
      document.getElementById('Literatura-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa4' className='capa1'>


              <div id='Literatura-titulo4' className='titulo1'>
                <b id='Literatura-tituloo4'>TITULO :</b><br /> 
                <b id='Literatura-autor4'>AUTOR :</b><br />
                <b id='Literatura-ano4'>ANO :</b><br />
                <b id='Literatura-licenca4'>LICENÇA :</b><br />
                <b id='Literatura-tipo4'>TIPO :</b><br /><br />
                <b id='Literatura-formato4'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1aSLoyOajAQIVE0fZAA0gT0WExWzGKObj/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Literatura-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Reliquiasinf;

    




   