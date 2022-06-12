import {  Link } from 'react-router-dom';
import React from "react";

function Criptografia(){

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
 
       capa.setAttribute('src', inf.Cursos[1].capa);
       document.getElementById('Cursos-capa2').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Criptografia'> <div id="Cursos-capa2" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Criptografia;

   
 
   
   
           
    
 

 