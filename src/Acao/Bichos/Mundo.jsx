import {  Link } from 'react-router-dom';
import React from "react";

function Mundo(){

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
 
       capa.setAttribute('src', inf.Aventura[0].capa);
       document.getElementById('acao-capa9').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Volta-Mundo'> <div id="acao-capa9" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Mundo;

   
 
   
   
           
    
 

 