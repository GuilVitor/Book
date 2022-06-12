import {  Link } from 'react-router-dom';
import React from "react";

function Imposto(){

  const url = "https://appbluemusicguil.herokuapp.com/Destaque"


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
 
       capa.setAttribute('src', partidas.Destaque[1].capa);
       document.getElementById('capa2').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Imposto'> <div id="capa2" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Imposto;

   
 
   
   
           
    
 

 