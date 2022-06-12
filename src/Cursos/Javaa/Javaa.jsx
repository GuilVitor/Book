import {  Link } from 'react-router-dom';
import React from "react";

function java(){

  const url = "https://appbluemusicguil.herokuapp.com/Cursos"


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
 
       capa.setAttribute('src', inf.Cursos[0].capa);
       document.getElementById('Cursos-capa0').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/java'> <div id="Cursos-capa0" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default java;

   
 
   
   
           
    
 

 