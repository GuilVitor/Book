import './inf-Submarinas.css'

function Submarinoinf(){
  const url = "https://appbluemusicguil.herokuapp.com/Aventura"
  
  
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
      tituloo.innerText = partidas.Aventura[3].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Aventura[3].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Aventura[3].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Aventura[3].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Aventura[3].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Aventura[3].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Aventura[3].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Aventura[3].capa);
      document.getElementById('acao-capaa4').append(capa);

      document.getElementById('acao-tituloo4').append(tituloo);
      document.getElementById('acao-Descricao4').append(descricaoo1);
      document.getElementById('acao-autor4').append(autoor);
      document.getElementById('acao-ano4').append(anoor);
      document.getElementById('acao-licenca4').append(licenca);
      document.getElementById('acao-tipo4').append(tipoo);
      document.getElementById('acao-formato4').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='acao-capaa4' className='capa1'>


              <div id='acao-titulo4' className='titulo1'>
                <b id='acao-tituloo4'>TITULO :</b><br /> 
                <b id='acao-autor4'>AUTOR :</b><br />
                <b id='acao-ano4'>ANO :</b><br />
                <b id='acao-licenca4'>LICENÇA :</b><br />
                <b id='acao-tipo4'>TIPO :</b><br /><br />
                <b id='acao-formato4'>FORMATO EM :</b><br />

            <a href="https://drive.google.com/file/d/1mZnuYGrz2x6a-OgPFVrrybsGd4XA3EBo/view?usp=sharing"> <button className='butao-baixar'>BAIXAR</button></a> 

             


</div>


   <div id='acao-Descricao4' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='acao-fundo4'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Submarinoinf;

    




   