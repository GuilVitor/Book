import {  Link } from 'react-router-dom';
import React from "react";

function Maluquinho(){

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
 
       capa.setAttribute('src', inf.Infantis[1].capa);
       document.getElementById('Infantis-capa2').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Maluquinho'> <div id="Infantis-capa2" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Maluquinho;

   
 
   
   
           
    
 

 