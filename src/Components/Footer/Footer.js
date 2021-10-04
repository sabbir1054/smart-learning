import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary mt-5 pt-3">
      <div className="container">
        <Row className="d-flex justify-content-center">
          <Col className="m-auto" md={4}>
            <h2 className="text-white ">
              Smart <i className="fas fa-graduation-cap text-warning"></i>
              Learning
            </h2>
          </Col>
          <Col md={4}>
            <h4 className="text-white">
              <u>Links</u>
            </h4>
            <ul className="ms-auto list-unstyled">
              <li>
                <NavLink to="/home" className="text-decoration-none text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-decoration-none text-white"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service"
                  className="text-decoration-none text-white"
                >
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admission"
                  className="text-decoration-none  text-white"
                >
                  Admission
                </NavLink>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            {/* Contact section info */}
            <h3 className="text-white">Contact Details</h3>
            <ul className="list-unstyled text-white">
              <li>info@ysmartLearning.com</li>
              <li>www.smartlearning.com</li>
              <li>PO Box 16122 Collins Street West Victoria 8007 Australia</li>
              <li>+61 3 5476 6284</li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyRight text-center text-white bg-dark py-3">
        <h5>
          All Rights Reserved. © 2021 SmartLearning Design By : Muhammad Sabbir
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
