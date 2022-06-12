import {  Link } from 'react-router-dom';
import React from "react";

function Isaura(){

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
 
       capa.setAttribute('src', inf.Literatura[6].capa);
       document.getElementById('Literatura-capa2').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Isaura'> <div id="Literatura-capa2" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Isaura;

   
 
   
   
           
    
 

 