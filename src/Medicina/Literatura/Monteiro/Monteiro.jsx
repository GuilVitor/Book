import {  Link } from 'react-router-dom';
import React from "react";
import './Monteiro.css'


function Monteiro(){

  const url = "https://appbluemusicguil.herokuapp.com/Literatura"


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
 
       capa.setAttribute('src', inf.Literatura[9].capa);
       document.getElementById('Literatura-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Monteiro'> <div id="Literatura-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Monteiro;

   
 
   
   
           
    
 

 