import {  Link } from 'react-router-dom';
import React from "react";

function Sus(){

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
 
       capa.setAttribute('src', inf.Cordel[1].capa);
       document.getElementById('Cordel-capa8').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Susa'> <div id="Cordel-capa8" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Sus;

   
 
   
   
           
    
 

 