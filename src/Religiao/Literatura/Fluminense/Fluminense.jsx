import "./Fluminense.css"
import {  Link } from 'react-router-dom';
import React from "react";

function Fluminense(){

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
   function mostrarinf(partidas) {
     console.log(partidas, "Isso é partidas")
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Literatura[2].capa);
       document.getElementById('Literaturae-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Fluminense'> <div id="Literaturae-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Fluminense;

   
 
   
   
           
    
 

 