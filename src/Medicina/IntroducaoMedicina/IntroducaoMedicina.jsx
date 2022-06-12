import {  Link } from 'react-router-dom';
import React from "react";

function IntroducaoMedicina(){

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
 
       capa.setAttribute('src', inf.Medicina[7].capa);
       document.getElementById('Medicina-capa5').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/IntroducaoMedicina'> <div id="Medicina-capa5" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default IntroducaoMedicina;

   
 
   
   
           
    
 

 