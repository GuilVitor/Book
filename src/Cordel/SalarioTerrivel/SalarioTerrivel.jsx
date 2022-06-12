import {  Link } from 'react-router-dom';
import React from "react";
import './SalarioTerrivel.css'


function SalarioTerrivel(){

  const url = "https://appbluemusicguil.herokuapp.com/Cordel"


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
 
       capa.setAttribute('src', inf.Cordel[9].capa);
       document.getElementById('Cordel-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/SalarioTerrivel'> <div id="Cordel-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default SalarioTerrivel;

   
 
   
   
           
    
 

 