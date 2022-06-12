import { Carousel } from "react-bootstrap"
import "./carrossel.css"
import Novonavbar from "../Navbar/Novo-navbar";


function Carrossel(){
  return (
   

  <div className="carrossel">
            <Novonavbar />

      <div className="conatiner">

 <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.baixelivros.com.br/media/2019/04/arte-da-guerra-1.jpg"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAckgE0jCBKocJmku2YGUWdhTyQoeVrDpslm5UZbM-ipJA_Zzw9qclRQixsLHf02ACGbQ&usqp=CAU"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa0gsLnrgiajXa59_kSOMAQ4u9CJgOskGDSkinYvi09ZzTcXJ2FIYQBMBOT18fXUlE5Ho&usqp=CAU"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

      </div>

  </div>



  );
}

export default Carrossel;
