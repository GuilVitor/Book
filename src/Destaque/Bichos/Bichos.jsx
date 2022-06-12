import {  Link } from 'react-router-dom';
import React from "react";

function Bichos(){

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
 
       capa.setAttribute('src', inf.Destaque[8].capa);
       document.getElementById('capa9').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Bichos'> <div id="capa9" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Bichos;

   
 
   
   
           
    
 

 