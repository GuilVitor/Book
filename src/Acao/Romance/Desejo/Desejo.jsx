import {  Link } from 'react-router-dom';
import React from "react";

function Desejo(){

  const url = "https://appbluemusicguil.herokuapp.com/Romance"


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
 
       capa.setAttribute('src', inf.Romance[7].capa);
       document.getElementById('Romance-capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Desejo'> <div id="Romance-capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Desejo;

   
 
   
   
           
    
 

 