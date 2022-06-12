import {  Link } from 'react-router-dom';
import React from "react";

function HumildadeCrista(){

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
 
       capa.setAttribute('src', inf.Religiao[8].capa);
       document.getElementById('Religiao-capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/HumildadeCrista'> <div id="Religiao-capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default HumildadeCrista;

   
 
   
   
           
    
 

 