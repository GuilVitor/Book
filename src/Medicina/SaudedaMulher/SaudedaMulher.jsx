import {  Link } from 'react-router-dom';
import React from "react";

function SaudedaMulher(){

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
 
       capa.setAttribute('src', inf.Medicina[4].capa);
       document.getElementById('Medicina-capa').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/SaudedaMulher'> <div id="Medicina-capa" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default SaudedaMulher;

   
 
   
   
           
    
 

 