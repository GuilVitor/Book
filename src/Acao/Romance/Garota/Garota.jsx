import {  Link } from 'react-router-dom';
import React from "react";

function Garota(){

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
 
       capa.setAttribute('src', inf.Romance[0].capa);
       document.getElementById('Romance-capa1').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Garota'> <div id="Romance-capa1" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Garota;

   
 
   
   
           
    
 

 