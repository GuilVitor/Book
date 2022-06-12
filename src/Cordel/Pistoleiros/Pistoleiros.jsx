import {  Link } from 'react-router-dom';
import React from "react";

function Pistoleiros(){

  const url = "https://appbluemusicguil.herokuapp.com/Cordel"


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
 
       capa.setAttribute('src', partidas.Cordel[5].capa);
       document.getElementById('Cordel-capa6').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Pistoleiros'> <div id="Cordel-capa6" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Pistoleiros;

   
 
   
   
           
    
 

 