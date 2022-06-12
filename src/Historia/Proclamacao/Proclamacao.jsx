import {  Link } from 'react-router-dom';
import React from "react";

function Proclamacao(){

  const url = "https://appbluemusicguil.herokuapp.com/Historia"


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
 
       capa.setAttribute('src', inf.Historia[7].capa);
       document.getElementById('Historia-capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Proclamacao'> <div id="Historia-capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Proclamacao;

   
 
   
   
           
    
 

 