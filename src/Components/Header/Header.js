import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
      <>
        <Navbar expand="lg"  id="navigation">
          <Container>
            <Navbar.Brand>
              <NavLink to="/" className="text-decoration-none">
                <h3 className="text-white ">
                  Smart <i className="fas fa-graduation-cap text-warning"></i> Learning{" "}
                </h3>
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link>
                  <NavLink to="/home" className='text-decoration-none text-white navLink'>Home</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/about" className='text-decoration-none text-white navLink'>About</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/service" className='text-decoration-none text-white navLink'>Service</NavLink>
                </Nav.Link>
                <Nav.Link>
                  <NavLink to="/admission" className='text-decoration-none text-white navLink'>Admission</NavLink>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
};

export default Header;