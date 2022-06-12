import './inf-Monteiro.css'

function MonteiroInf(){
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
      tituloo.innerText = partidas.Literatura[9].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Literatura[9].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Literatura[9].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Literatura[9].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Literatura[9].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Literatura[9].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Literatura[9].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Literatura[9].capa);
      document.getElementById('Literatura-capaa10').append(capa);

      document.getElementById('Literatura-tituloo10').append(tituloo);
      document.getElementById('Literatura-Descricao10').append(descricaoo1);
      document.getElementById('Literatura-autor10').append(autoor);
      document.getElementById('Literatura-ano10').append(anoor);
      document.getElementById('Literatura-licenca10').append(licenca);
      document.getElementById('Literatura-tipo10').append(tipoo);
      document.getElementById('Literatura-formato10').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Literatura-capaa10' className='Literatura-capa10'><div/>


              <div id='Literatura-titulo10' className='titulo1'>
                <b id='Literatura-tituloo10'>TITULO :</b><br /> 
                <b id='Literatura-autor10'>AUTOR :</b><br />
                <b id='Literatura-ano10'>ANO :</b><br />
                <b id='Literatura-licenca10'>LICENÇA :</b><br />
                <b id='Literatura-tipo10'>TIPO :</b><br /><br />
                <b id='Literatura-formato10'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/18SLKhdk_5NZC7AdCYX1iWZIetqkvpbzn/view?usp=sharing"><button className='butao-baixar'>BAIXAR</button></a>

             


</div>


   <div id='Literatura-Descricao10' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Literatura-fundo10'>
              
</div>
  

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default MonteiroInf;

    




  