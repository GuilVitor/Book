import {  Link } from 'react-router-dom';
import React from "react";

function HorasdeTerror(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Cordel[7].capa);
       document.getElementById('Cordel-capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/HorasdeTerror'> <div id="Cordel-capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default HorasdeTerror;

   
 
   
   
           
    
 

 