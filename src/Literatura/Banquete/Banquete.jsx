import {  Link } from 'react-router-dom';
import React from "react";

function Banquete(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Literatura[4].capa);
       document.getElementById('Literatura-capa').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Banquete'> <div id="Literatura-capa" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Banquete;

   
 
   
   
           
    
 

 