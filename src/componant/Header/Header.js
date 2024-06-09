import './Header.css';
import React from 'react';
import {  Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink as Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header-style'>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='pt-3 pb-3'>
        <Container>
        <Navbar.Brand >
        <Link to='/home' className='brand-style'>Brilliant-Developer</Link>
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to='/home' className='nav-style'>Home</Link>
            <Link to='/services' className='nav-style ms-3'>Services</Link>
            <Link to='#' className='nav-style ms-3'>Our News</Link>
                      
          </Nav>
          <Nav>
          <Link to='/gallery' className='nav-style me-3'>Gallery</Link>
          <Link to='about' className='nav-style'>About Us</Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
        
      
       </div>
    );
};

export default Header;