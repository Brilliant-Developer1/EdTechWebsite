import './Footer.css';

import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    
    return (
        <div className='footer-body'>
        <Container >
        <Row className='footer-style d-flex'>
        <Col className='text-container'>
            <h3>About</h3>
            <p>There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form by injected.</p>
        </Col>
        <Col className='text-container'>
            <h3>Explore Our Site</h3>
            <Nav defaultActiveKey="/home" className="flex-column text-start text-secondary">
                <NavLink 
                to="/home"className='linkStyle'>Home</NavLink>
                <NavLink 
                to="/services"className='linkStyle'>Services</NavLink>
                <NavLink 
                to="/about"className='linkStyle'>About Us</NavLink>
                <NavLink 
                to="/gallery"className='linkStyle'>Gallery</NavLink>
                
            </Nav>
        </Col>
        <Col className='text-container'>
            <h3>Have any Question?</h3>
            <div className='d-flex'>
            <div className='text-start d-flex ms-5'>
            <FontAwesomeIcon className='fs-1 footer-icon-style mt-3' icon={faPhone} />
            <div className='ms-3'>
                <p className='text-scondary'>Phone</p>
                <p>998778223</p>
            </div>
            </div>
            <div className='text-start d-flex ms-4'>
            <FontAwesomeIcon className='fs-1 footer-icon-style mt-3' icon={faEnvelope} />
            <div className='ms-3'>
                <p className='text-scondary'>Email</p>
                <p>brilliant@abc.com</p>
            </div>
            </div>
            </div>
        </Col>
    </Row>
        <p className='text-center mt-3 pb-4 mb-0'>Copyright - 2019 - Company - All rights reserved. Powered by WordPress.</p>
        </Container>
        </div>
    );
};

export default Footer;