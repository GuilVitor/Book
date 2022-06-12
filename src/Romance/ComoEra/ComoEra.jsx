import "./ComoEra.css"
import {  Link } from 'react-router-dom';
import React from "react";

function ComoEra(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Romance[2].capa);
       document.getElementById('Romancee-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/ComoEra'> <div id="Romancee-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default ComoEra;

   
 
   
   
           
    
 

 