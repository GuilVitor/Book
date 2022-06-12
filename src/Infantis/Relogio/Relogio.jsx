import {  Link } from 'react-router-dom';
import React from "react";

function Relogio(){

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
 
       capa.setAttribute('src', inf.Infantis[4].capa);
       document.getElementById('Infantis-capa1').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Relogio'> <div id="Infantis-capa1" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Relogio;

   
 
   
   
           
    
 

 