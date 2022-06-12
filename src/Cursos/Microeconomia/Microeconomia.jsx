import "./Microeconomia.css"
import {  Link } from 'react-router-dom';
import React from "react";

function Microeconomia(){

  const url = "https://appbluemusicguil.herokuapp.com/Cursos"


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
 
       capa.setAttribute('src', partidas.Cursos[2].capa);
       document.getElementById('Cursose-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Microeconomia'> <div id="Cursose-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Microeconomia;

   
 
   
   
           
    
 

 