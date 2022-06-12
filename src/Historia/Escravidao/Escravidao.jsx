import "./Escravidao.css"
import {  Link } from 'react-router-dom';
import React from "react";

function Escravidao(){

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
   function mostrarinf(partidas) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', partidas.Historia[2].capa);
       document.getElementById('Historiae-capa3').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Escravidao'> <div id="Historiae-capa3" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Escravidao;

   
 
   
   
           
    
 

 