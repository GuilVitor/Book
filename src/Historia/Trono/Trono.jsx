import {  Link } from 'react-router-dom';
import React from "react";

function Trono(){

  const url = "https://appbluemusicguil.herokuapp.com/Historia"


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
 
       capa.setAttribute('src', partidas.Historia[5].capa);
       document.getElementById('Historia-capa6').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Trono'> <div id="Historia-capa6" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Trono;

   
 
   
   
           
    
 

 