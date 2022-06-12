import {  Link } from 'react-router-dom';
import React from "react";

function ObrasCompleta(){

  const url = "https://appbluemusicguil.herokuapp.com/Literatura"


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
 
       capa.setAttribute('src', inf.Literatura[8].capa);
       document.getElementById('Literatura-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/ObrasCompleta'> <div id="Literatura-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default ObrasCompleta;

   
 
   
   
           
    
 

 