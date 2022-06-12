import {  Link } from 'react-router-dom';
import React from "react";
import './Recorda.css'


function Recorda(){

  const url = "https://appbluemusicguil.herokuapp.com/Romance"


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
     
       var capa = document.createElement('im');
 
       capa.setAttribute('src', inf.Romance.capa);
     }
   
   buscarinf();
   
   
 
   

    return (
     
    <>


   <Link to='/Recorda'> <div id="Romance-capa10" className="img"><img src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12115744/1008011865.jpg?v=637142272802400000" alt="" /> </div></Link>
           
        





       


        

        

      
      
       
        </>

  
  
  
    );

}
  
   export default Recorda;

   
 
   
   
           
    
 

 