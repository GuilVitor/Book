import {  Link } from 'react-router-dom';
import React from "react";

function Viagem(){

  const url = "https://appbluemusicguil.herokuapp.com/Aventura"


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
 
       capa.setAttribute('src', inf.Aventura[1].capa);
       document.getElementById('viagem-capa').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Aventura'> <div id="viagem-capa" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Viagem;

   
 
   
   
           
    
 

 