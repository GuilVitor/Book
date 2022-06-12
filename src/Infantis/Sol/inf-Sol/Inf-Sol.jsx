import './inf-Sol.css'

function Solinf(){
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
      tituloo.innerText = partidas.Infantis[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Infantis[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Infantis[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Infantis[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Infantis[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Infantis[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[0].capa);
      document.getElementById('Infantis-capaa0').append(capa);

      document.getElementById('Infantis-tituloo0').append(tituloo);
      document.getElementById('Infantis-Descricao0').append(descricaoo1);
      document.getElementById('Infantis-autor0').append(autoor);
      document.getElementById('Infantis-ano0').append(anoor);
      document.getElementById('Infantis-licenca0').append(licenca);
      document.getElementById('Infantis-tipo0').append(tipoo);
      document.getElementById('Infantis-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa0' className='capa1'>


              <div id='Infantis-titulo0' className='titulo1'>
                <b id='Infantis-tituloo0'>TITULO :</b><br /> 
                <b id='Infantis-autor0'>AUTOR :</b><br />
                <b id='Infantis-ano0'>ANO :</b><br />
                <b id='Infantis-licenca0'>LICENÇA :</b><br />
                <b id='Infantis-tipo0'>TIPO :</b><br /><br />
                <b id='Infantis-formato0'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1OHtLYB9TX1nzTuZWde3-Hpvq7HV4ZmOK/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Infantis-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Solinf;

    




   