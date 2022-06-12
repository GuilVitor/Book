import {  Link } from 'react-router-dom';
import React from "react";
import './ArtigosCOVID-19.css'


function ArtigosCOVID19(){

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
 
       capa.setAttribute('src', inf.Medicina[9].capa);
       document.getElementById('Medicina-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/ArtigosCOVID19'> <div id="Medicina-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default ArtigosCOVID19;

   
 
   
   
           
    
 

 