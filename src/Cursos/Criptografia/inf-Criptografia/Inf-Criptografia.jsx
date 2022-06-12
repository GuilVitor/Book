import './inf-Criptografia.css'

function Criptografiainf(){
  const url = "https://appbluemusicguil.herokuapp.com/Cursos"
  
  
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
      tituloo.innerText = partidas.Cursos[1].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Cursos[1].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Cursos[1].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Cursos[1].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Cursos[1].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Cursos[1].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Cursos[1].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Cursos[1].capa);
      document.getElementById('Criptografia-capaa1').append(capa);

      document.getElementById('Criptografia-tituloo1').append(tituloo);
      document.getElementById('Criptografia-Descricao1').append(descricaoo1);
      document.getElementById('Criptografia-autor1').append(autoor);
      document.getElementById('Criptografia-ano1').append(anoor);
      document.getElementById('Criptografia-licenca1').append(licenca);
      document.getElementById('Criptografia-tipo1').append(tipoo);
      document.getElementById('Criptografia-formato1').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Criptografia-capaa1' className='capa1'>


              <div id='Criptografia-titulo1' className='titulo1'>
                <b id='Criptografia-tituloo1'>TITULO :</b><br /> 
                <b id='Criptografia-autor1'>AUTOR :</b><br />
                <b id='Criptografia-ano1'>ANO :</b><br />
                <b id='Criptografia-licenca1'>LICENÇA :</b><br />
                <b id='Criptografia-tipo1'>TIPO :</b><br /><br />
                <b id='Criptografia-formato1'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/16B4-Dr33TU1oXgNogFwJ9TMrA8SPs_R0/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Criptografia-Descricao1' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Cursos-fundo2'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default Criptografiainf;

    




  