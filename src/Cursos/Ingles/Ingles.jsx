import {  Link } from 'react-router-dom';
import React from "react";

function Ingles(){

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
 
       capa.setAttribute('src', inf.Cursos[3].capa);
       document.getElementById('Cursos-capa4').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Ingles'> <div id="Cursos-capa4" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Ingles;

   
 
   
   
           
    
 

 