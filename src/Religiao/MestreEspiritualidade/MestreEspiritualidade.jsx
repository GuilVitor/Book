import {  Link } from 'react-router-dom';
import React from "react";

function MestreEspiritualidade(){

  const url = "https://appbluemusicguil.herokuapp.com/Religiao"


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
 
       capa.setAttribute('src', inf.Religiao[0].capa);
       document.getElementById('Religiao-capa0').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/MestreEspiritualidade'> <div id="Religiao-capa0" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default MestreEspiritualidade;

   
 
   
   
           
    
 

 