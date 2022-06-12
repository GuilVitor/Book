import {  Link } from 'react-router-dom';
import React from "react";

function Elefante(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Infantis[8].capa);
       document.getElementById('Infantis-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Elefante'> <div id="Infantis-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Elefante;

   
 
   
   
           
    
 

 