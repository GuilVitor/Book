import "./Principe.css"
import {  Link } from 'react-router-dom';
import React from "react";

function Principe(){

  const url = "https://appbluemusicguil.herokuapp.com/Infantis"


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
 
       capa.setAttribute('src', partidas.Infantis[2].capa);
       document.getElementById('Infantise-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Principe'> <div id="Infantise-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Principe;

   
 
   
   
           
    
 

 