import './inf-Carta.css'

function CartaInf(){
  const url = "https://appbluemusicguil.herokuapp.com/Romance"
  
  
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
      tituloo.innerText = partidas.Romance[6].Título;

      var autoor = document.createElement('h6');
      autoor.innerText = partidas.Romance[6].Autor;

      var anoor = document.createElement('h6');
      anoor.innerText = partidas.Romance[6].Ano;

      var licenca = document.createElement('h6');
      licenca.innerText = partidas.Romance[6].Licença;
    
      var tipoo = document.createElement('h6');
      tipoo.innerText = partidas.Romance[6].Tipo;

      var formatoo = document.createElement('h6');
      formatoo.innerText = partidas.Romance[6].Formato;


      var descricaoo1 = document.createElement('h5');
      descricaoo1.innerText = partidas.Romance[6].Descrição;

      var capa = document.createElement('img');

      capa.setAttribute('src', partidas.Romance[6].capa);
      document.getElementById('Romance-capaa8').append(capa);

      document.getElementById('Romance-tituloo8').append(tituloo);
      document.getElementById('Romance-Descricao8').append(descricaoo1);
      document.getElementById('Romance-autor8').append(autoor);
      document.getElementById('Romance-ano8').append(anoor);
      document.getElementById('Romance-licenca8').append(licenca);
      document.getElementById('Romance-tipo8').append(tipoo);
      document.getElementById('Romance-formato8').append(formatoo);
    }
  
  infTentativa();
  
   
    return (
     
        <>
        
       <div className='inf3'>
         <div className='max-widht'> 

         <div className='center'>

          <div className='perfil'>

              <div id='Romance-capaa8' className='capa1'>


              <div id='Romance-titulo8' className='titulo1'>
                <b id='Romance-tituloo8'>TITULO :</b><br /> 
                <b id='Romance-autor8'>AUTOR :</b><br />
                <b id='Romance-ano8'>ANO :</b><br />
                <b id='Romance-licenca8'>LICENÇA :</b><br />
                <b id='Romance-tipo8'>TIPO :</b><br /><br />
                <b id='Romance-formato8'>FORMATO EM :</b><br />

                <a href="https://drive.google.com/file/d/1M67ojqbqaNItb7qYsikLM7bVuxVZZt-h/view?usp=sharing">  <button className='butao-baixar'>BAIXAR</button> </a>

             


</div>


   <div id='Romance-Descricao8' className='Descricao1'><b>DESCRIÇÃO : </b> <br /></div> 

             
              </div>

             
               
              </div>
              
              
              <div className='Romance-fundo8'>
              
</div>

    </div>
  
  
  

    
  
     
            

          </div>

          </div>
             
          

  




       

       
        </>

  
  
    );

    

  }

  
   export default CartaInf;

    




   