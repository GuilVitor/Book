import {  Link } from 'react-router-dom';
import React from "react";

function Perguntadeira(){

  const url = "https://appbluemusicguil.herokuapp.com/Infantis"


   function buscarinf() {
     fetch(url)
     .then(resposta => {
       resposta.json()
       .then(obj => {
       mostrarinf(obj);
     })
   })
   .catch()
   }
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Infantis[5].capa);
       document.getElementById('Infantis-capa6').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Perguntadeira'> <div id="Infantis-capa6" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Perguntadeira;

   
 
   
   
           
    
 

 