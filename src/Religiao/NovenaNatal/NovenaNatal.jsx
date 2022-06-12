import "./NovenaNatal.css"
import {  Link } from 'react-router-dom';
import React from "react";

function NovenaNatal(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Religiao[2].capa);
       document.getElementById('Religiaoe-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/NovenaNatal'> <div id="Religiaoe-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default NovenaNatal;

   
 
   
   
           
    
 

 