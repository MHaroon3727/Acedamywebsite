import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import card1 from "./ExampleCarouselImage/card1.png";


function Teaching() {
  return (
    <>
    <div className='maincarousel'>
        <div className='course'><h2> Our Course</h2></div>
        
    <Carousel>
      <Carousel.Item>
        <img src={card1} text="First slide" />
        <Carousel.Caption>
          <h3>Henari</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src={card1} text="Second slide" />
        <Carousel.Caption>
          <h3>Jhon</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={card1} text="Third slide" />
        <Carousel.Caption>
          <h3>Richard</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Teaching