import {  Link } from 'react-router-dom';
import React from "react";

function polvora(){

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
 
       capa.setAttribute('src', inf.Aventura[6].capa);
       document.getElementById('acao-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Polvora'> <div id="acao-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default polvora;

   
 
   
   
           
    
 

 