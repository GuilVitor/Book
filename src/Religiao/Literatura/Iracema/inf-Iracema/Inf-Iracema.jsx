import './inf-Iracema.css'

function Iracemainf(){
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
      tituloo.innerText = partidas.Literatura[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[0].capa);
      document.getElementById('Literatura-capaa0').append(capa);

      document.getElementById('Literatura-tituloo0').append(tituloo);
      document.getElementById('Literatura-Descricao0').append(descricaoo1);
      document.getElementById('Literatura-autor0').append(autoor);
      document.getElementById('Literatura-ano0').append(anoor);
      document.getElementById('Literatura-licenca0').append(licenca);
      document.getElementById('Literatura-tipo0').append(tipoo);
      document.getElementById('Literatura-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa0' className='capa1'>


              <div id='Literatura-titulo0' className='titulo1'>
                <b id='Literatura-tituloo0'>TITULO :</b><br /> 
                <b id='Literatura-autor0'>AUTOR :</b><br />
                <b id='Literatura-ano0'>ANO :</b><br />
                <b id='Literatura-licenca0'>LICENÇA :</b><br />
                <b id='Literatura-tipo0'>TIPO :</b><br /><br />
                <b id='Literatura-formato0'>FORMATO EM :</b><br />

             <button className='butao-baixar'>BAIXAR</button>

             


</div>


   <div id='Literatura-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Iracemainf;

    




   