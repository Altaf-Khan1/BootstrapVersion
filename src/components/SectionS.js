import React from 'react';
import "./SectionS.css";

import { Carousel } from 'react-bootstrap'

function SectionS() {
  return (
    <div>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="First slide"
            height="600px"
          />
          <Carousel.Caption>
            <p id="caption">SHOWCASING YOUR DREAM HOME WITH US!!!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="Second slide"
            height="600px"
          />

          <Carousel.Caption>
            <p id="caption">TRANSFORMING SPACE INTO A DREAM COME TRUE!!! </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60"
            alt="Third slide"
            height="600px"
          />

          <Carousel.Caption>
            <p id="caption">GIVE YOUR DREAMS A SHAPE OF REALITY</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default SectionS