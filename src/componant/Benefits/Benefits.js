import './Benefits.css';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboard, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons';

const Benefits = () => {
    return (
        <Row className='d-flex benefits-style'>
            <Col sm>
            <Image src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" fluid />
            </Col>
            <Col className='p-2 ' sm>
                <h1 className='fw-bolder mb-4'>Benefits of learning with Brilliant-Devloper</h1>
                <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis estiegittis miristum nulla sed medy fringilla vitae .</p>
                <div className='d-flex justify-content-around icons-style'>
                    <div className='icon-style'>
                        <FontAwesomeIcon className='fs-1 ' icon={faUser} /> <hr />
                        <h4>Professional <br /> Courses</h4>
                    </div>
                    <div className='icon-style'>
                    <FontAwesomeIcon className='fs-1 icon-style' icon={faChalkboard} /><hr />
                    <h4>Live <br /> Learning</h4>
                    </div>
                    <div className='icon-style'>
                    <FontAwesomeIcon className='fs-1 icon-style' icon={faChalkboardTeacher} /><hr />
                    <h4>Expert <br /> Teachers</h4>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Benefits;