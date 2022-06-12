import {  Link } from 'react-router-dom';
import React from "react";

function Amei(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Romance[4].capa);
       document.getElementById('Romance-capa9').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Amei'> <div id="Romance-capa9" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Amei;

   
 
   
   
           
    
 

 