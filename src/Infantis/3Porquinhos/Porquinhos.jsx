import {  Link } from 'react-router-dom';
import React from "react";
import './Porquinhos.css'


function Porquinhos(){

  const url = "https://appbluemusicguil.herokuapp.com/Infantis"


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
 
       capa.setAttribute('src', inf.Infantis[9].capa);
       document.getElementById('Infantis-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Porquinhos'> <div id="Infantis-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Porquinhos;

   
 
   
   
           
    
 

 