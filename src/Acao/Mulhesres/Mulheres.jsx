import {  Link } from 'react-router-dom';
import React from "react";

function Mulheres(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Aventura[5].capa);
       document.getElementById('acao-capa6').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Mulheres'> <div id="acao-capa6" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Mulheres;

   
 
   
   
           
    
 

 