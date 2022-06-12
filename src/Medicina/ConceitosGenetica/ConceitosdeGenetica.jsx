import {  Link } from 'react-router-dom';
import React from "react";

function ConceitosdeGenetica(){

  const url = "https://appbluemusicguil.herokuapp.com/Medicina"


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
 
       capa.setAttribute('src', inf.Medicina[8].capa);
       document.getElementById('Medicina-capa7').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/ConceitosdeGenetica'> <div id="Medicina-capa7" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default ConceitosdeGenetica;

   
 
   
   
           
    
 

 