import {  Link } from 'react-router-dom';
import React from "react";
import './Cabeleireiro.css'


function Cabelereiro(){

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
   function mostrarinf(inf) {
     
       var capa = document.createElement('img');
 
       capa.setAttribute('src', inf.Cursos[10].cursos);
       document.getElementById('Cursos-capa10').append(capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Cabeleireiro'> <div id="Cursos-capa10" className="img"></div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Cabelereiro;

   
 
   
   
           
    
 

 