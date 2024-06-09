import './Gallery.css';
import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className='gallery'>
            <h1 className='text-center'>OUR GALLERY</h1>
            <Row className='g-4 mt-2'>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/into-success-group-young-freelancers-office-have-conversation-smiling_146671-13567.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15818.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/it-engineer-making-code_1098-21512.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/african-american-man-working-laptop-writing-notebook-man-with-beard-sitting-cafe_1157-48477.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/coding-man_1098-18084.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/pleased-cheerful-young-man-chats-online-with-friends-from-abroad-sits-front-laptop-computer-connected-4g-internet-coffee-shop-wears-optical-glasses-good-vision-likes-his-job_273609-29248.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/programmer-scanning-screen-his-smartwatch-with-smartphone-camera_1098-18710.jpg" thumbnail />
                </Col>
                <Col xs={6} md={4}>
                    <Image src="https://image.freepik.com/free-photo/close-up-portrait-freelance-it-specialists-looking-laptop-screen-with-smile_197531-4990.jpg" thumbnail />
                </Col>
            </Row>
        </div>
    );
};

export default Gallery;