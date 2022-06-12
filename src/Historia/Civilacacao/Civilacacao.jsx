import {  Link } from 'react-router-dom';
import React from "react";
import './Civilacacao.css'


function Civilizacao(){

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
 
       capa.setAttribute('src', inf.Historia[9].capa);
       document.getElementById('Historia-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Civilizacao'> <div id="Historia-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Civilizacao;

   
 
   
   
           
    
 

 