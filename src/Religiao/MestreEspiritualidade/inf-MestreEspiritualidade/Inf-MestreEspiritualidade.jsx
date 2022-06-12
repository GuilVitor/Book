import './inf-MestreEspiritualidade.css'

function MestreEspiritualidadeinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Religiao"
  
  
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
      tituloo.innerText = partidas.Religiao[0].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Religiao[0].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Religiao[0].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Religiao[0].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Religiao[0].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Religiao[0].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Religiao[0].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Religiao[0].capa);
      document.getElementById('Religiao-capaa0').append(capa);

      document.getElementById('Religiao-Descricao0').append(descricaoo1);
      document.getElementById('Religiao-autor0').append(autoor);
      document.getElementById('Religiao-ano0').append(anoor);
      document.getElementById('Religiao-licenca0').append(licenca);
      document.getElementById('Religiao-tipo0').append(tipoo);
      document.getElementById('Religiao-formato0').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Religiao-capaa0' className='capa1'>


              <div id='Religiao-titulo0' className='titulo1'>
                <b id='Religiao-tituloo0'>TITULO : Mestre da Espiritualidade</b><br /> 
                <b id='Religiao-autor0'>AUTOR :</b><br />
                <b id='Religiao-ano0'>ANO :</b><br />
                <b id='Religiao-licenca0'>LICENÇA :</b><br />
                <b id='Religiao-tipo0'>TIPO :</b><br /><br />
                <b id='Religiao-formato0'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1DP0PeNZ_XOMWCA9YkZLrjH3VpI-hsOPA/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Religiao-Descricao0' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Religiao-fundo0'>
              
</div>

  
  

    
  
     
            
</div>

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default MestreEspiritualidadeinf;

    




   