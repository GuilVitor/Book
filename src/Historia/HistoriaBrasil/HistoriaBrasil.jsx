import {  Link } from 'react-router-dom';
import React from "react";

function HistoriaBrasil(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Historia[8].capa);
       document.getElementById('Historia-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/HistoriaBrasil'> <div id="Historia-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default HistoriaBrasil;

   
 
   
   
           
    
 

 