import {  Link } from 'react-router-dom';
import React from "react";

function ABoaVontade(){

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
 
       capa.setAttribute('src', inf.Religiao[7].Autor);
       document.getElementById('Religiao-capa2').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>
   


   <Link to='/ABoaVontade'> <div id="Religiao-capa2" className="imgReligiao"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default ABoaVontade;

   
 
   
   
           
    
 

 