import {  Link } from 'react-router-dom';
import React from "react";

function Eternamente(){

  const url = "https://appbluemusicguil.herokuapp.com/Romance"


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
     console.log(partidas, "Isso é partidas")
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Romance[5].capa);
       document.getElementById('Romance-capa6').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Eternamente'> <div id="Romance-capa6" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Eternamente;

   
 
   
   
           
    
 

 