import {  Link } from 'react-router-dom';
import React from "react";

function LuaComanche(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Cordel[8].capa);
       document.getElementById('Cordel-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/LuaComanche'> <div id="Cordel-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default LuaComanche;

   
 
   
   
           
    
 

 