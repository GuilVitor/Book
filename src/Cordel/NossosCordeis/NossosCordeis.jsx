import "./NossosCordeis.css"
import {  Link } from 'react-router-dom';
import React from "react";

function NossosCordeis(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Cordel[2].capa);
       document.getElementById('Cordele-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/NossosCordeis'> <div id="Cordele-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default NossosCordeis;

   
 
   
   
           
    
 

 