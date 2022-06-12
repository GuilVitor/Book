import {  Link } from 'react-router-dom';
import React from "react";

function Submarino(){

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
 
       capa.setAttribute('src', inf.Aventura[3].capa);
       document.getElementById('acao-capa4').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Submarino'> <div id="acao-capa4" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Submarino;

   
 
   
   
           
    
 

 