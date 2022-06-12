import {  Link } from 'react-router-dom';
import React from "react";

function Iracema(){

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
 
       capa.setAttribute('src', inf.Literatura[0].capa);
       document.getElementById('Literatura-capa0').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Iracema'> <div id="Literatura-capa0" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Iracema;

   
 
   
   
           
    
 

 