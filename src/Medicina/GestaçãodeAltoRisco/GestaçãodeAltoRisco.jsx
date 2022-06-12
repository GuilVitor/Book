import {  Link } from 'react-router-dom';
import React from "react";

function GestacaodeAltoRisco
(){

  const url = "https://appbluemusicguil.herokuapp.com/Medicina"


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
 
       capa.setAttribute('src', inf.Medicina[3].capa);
       document.getElementById('Medicina-capa4').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/GestacaodeAltoRisco'> <div id="Medicina-capa4" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default GestacaodeAltoRisco
;

   
 
   
   
           
    
 

 