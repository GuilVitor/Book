import "./cortico.css"
import {  Link } from 'react-router-dom';
import React from "react";

function Cortico(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Destaque[0].capa);
       document.getElementById('capa').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/inf'> <div id="capa" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Cortico;

   
 
   
   
           
    
 

 