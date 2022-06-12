import {  Link } from 'react-router-dom';
import React from "react";

function SemanaSanta(){

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
 
       capa.setAttribute('src', inf.Religiao[4].capa);
       document.getElementById('Religiao-capa').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/SemanaSanta'> <div id="Religiao-capa" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default SemanaSanta;

   
 
   
   
           
    
 

 