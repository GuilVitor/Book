import {  Link } from 'react-router-dom';
import React from "react";

function BíbliaCatólica
(){

  const url = "https://appbluemusicguil.herokuapp.com/Religiao"


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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Religiao[3].capa);
       document.getElementById('Religiao-capa4').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/BibliaCatolica'> <div id="Religiao-capa4" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default BíbliaCatólica
;

   
 
   
   
           
    
 

 