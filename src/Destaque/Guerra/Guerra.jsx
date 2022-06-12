import {  Link } from 'react-router-dom';
import React from "react";

function Guerra(){

  const url = "https://appbluemusicguil.herokuapp.com/Destaque"


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
 
       capa.setAttribute('src', inf.Destaque[4].capa);
       document.getElementById('capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/guerra'> <div id="capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Guerra;

   
 
   
   
           
    
 

 