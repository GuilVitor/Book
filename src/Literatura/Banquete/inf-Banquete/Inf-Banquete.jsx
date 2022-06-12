import './inf-Banquete.css'

function BanqueteInf(){
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
      tituloo.innerText = partidas.Literatura[4].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[4].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[4].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[4].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[4].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[4].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[4].Descrição;

      var capaa = document.createElement('img');

      capaa.setAttribute('src', partidas.Literatura[4].capa);
      document.getElementById('Literatura-capaa1').append(capaa);

      document.getElementById('Literatura-tituloo1').append(tituloo);
      document.getElementById('Literatura-Descricao1').append(descricaoo1);
      document.getElementById('Literatura-autor1').append(autoor);
      document.getElementById('Literatura-ano1').append(anoor);
      document.getElementById('Literatura-licenca1').append(licenca);
      document.getElementById('Literatura-tipo1').append(tipoo);
      document.getElementById('Literatura-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa1' className='capa1'>


              <div id='Literatura-titulo1' className='titulo1'>
                <b id='Literatura-tituloo1'>TITULO : Platâo</b><br /> 
                <b id='Literatura-autor1'>AUTOR :</b><br />
                <b id='Literatura-ano1'>ANO :</b><br />
                <b id='Literatura-licenca1'>LICENÇA :</b><br />
                <b id='Literatura-tipo1'>TIPO :</b><br /><br />
                <b id='Literatura-formato1'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1IY3mDPaGqW66mktqLyBXz4bHa2sEmtwu/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Literatura-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo1'>
              
</div>


    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default BanqueteInf;

    




   