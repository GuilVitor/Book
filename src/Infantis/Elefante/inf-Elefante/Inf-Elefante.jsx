import './inf-Elefante.css'

function Elefanteinf(){
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
      var tituloo = document.createElement('h8');
      tituloo.innerText = partidas.Infantis[8].Título;

      var autoor = document.createElement('h8');
      autoor.innerText = partidas.Infantis[8].Autor;

      var anoor = document.createElement('h8');
      anoor.innerText = partidas.Infantis[8].Ano;

      var licenca = document.createElement('h8');
      licenca.innerText = partidas.Infantis[8].Licença;
    
      var tipoo = document.createElement('h8');
      tipoo.innerText = partidas.Infantis[8].Tipo;

      var formatoo = document.createElement('h8');
      formatoo.innerText = partidas.Infantis[8].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Infantis[8].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Infantis[8].capa);
      document.getElementById('Infantis-capaa7').append(capa);

      document.getElementById('Infantis-tituloo7').append(tituloo);
      document.getElementById('Infantis-Descricao7').append(descricaoo1);
      document.getElementById('Infantis-autor7').append(autoor);
      document.getElementById('Infantis-ano7').append(anoor);
      document.getElementById('Infantis-licenca7').append(licenca);
      document.getElementById('Infantis-tipo7').append(tipoo);
      document.getElementById('Infantis-formato7').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Infantis-capaa7' className='capa1'>


              <div id='Infantis-titulo7' className='titulo1'>
                <b id='Infantis-tituloo7'>TITULO :</b><br /> 
                <b id='Infantis-autor7'>AUTOR :</b><br />
                <b id='Infantis-ano7'>ANO :</b><br />
                <b id='Infantis-licenca7'>LICENÇA :</b><br />
                <b id='Infantis-tipo7'>TIPO :</b><br /><br />
                <b id='Infantis-formato7'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1olte_wq4qtA5DTMcDFaaLf3ThoxLVMn8/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Infantis-Descricao7' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Infantis-fundo7'>
              
</div>

  
  

    
  
     
</div>


          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Elefanteinf;

    




  