import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  return (
    <>
      <div className="about-heading py-5">
        <h1 className="py-5 display-2 fw-normal text-center heading">
          About us
        </h1>
      </div>

      <Container className="bg-light">
        <Row className="mt-5 py-3">
          <Col md={6} className="p-5">
            <ul className="list-unstyled">
              <li className="text-center">
                <i className="fas fa-bullseye" style={{ fontSize: "5em" }}></i>
              </li>
              <li className="text-center">
                <h4>Our Mission</h4>
              </li>
              <li className="text-center">
                <p>
                  Our mission is to provide you with the knowledge and skills
                  you need to be able to craft the kinds of stories that you
                  want to tell
                </p>
              </li>
            </ul>
          </Col>
          <Col md={6} className="p-5">
            <ul className="list-unstyled">
              <li className="text-center">
                <i
                  className="fas fa-angle-double-down"
                  style={{ fontSize: "5em" }}
                ></i>
              </li>
              <li className="text-center">
                <h4>Our Values</h4>
              </li>
              <li className="text-center">
                <p>
                  To give everyone the ability to be heard seen, and share their
                  thoughts and experience as they happen!
                </p>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="bg-dark py-4 pb-5  border rounded">
          <h3 className="text-white text-center pb-4 social">
            <u>Connected in</u>
          </h3>
          <div className=" d-flex justify-content-evenly ">
            <Link to="/">
              <i className="fab fs-2 text-white fa-facebook"></i>
            </Link>
            <Link to="/">
              <i className="fab fs-2 text-white fa-twitter"></i>
            </Link>
            <Link to="/">
              <i className="fab fs-2 text-white fa-linkedin-in"></i>
            </Link>
            <Link to="/">
              <i className="fab fs-2 text-white fa-github"></i>
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;
