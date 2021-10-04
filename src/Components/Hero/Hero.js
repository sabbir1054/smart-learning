import React from "react";
import { Carousel } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <div className="slider">
        <Carousel>
          <Carousel.Item interval={1000} className="bg-dark">
            <img
              className="d-block w-100"
              src="./images/slide3.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="text-white display-1 fw-normal">
                Smart <i className="fas fa-graduation-cap text-warning"></i>
                Learning
              </h1>
              <p className="fs-2">
                Distance Learning is the future of Education
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500} className="bg-dark">
            <img
              className="d-block w-100"
              src="./images/slide2.png"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="text-white display-1 fw-normal">
                Smart <i className="fas fa-graduation-cap text-warning"></i>
                Learning
              </h1>
              <p className="fs-2">
                Distance Learning is the future of Education
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="bg-dark">
            <img
              className="d-block w-100"
              src="./images/slide1.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="text-white display-1 fw-normal">
                Smart <i className="fas fa-graduation-cap text-warning"></i>
                Learning
              </h1>
              <p className="fs-2">
                Distance Learning is the future of Education
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
