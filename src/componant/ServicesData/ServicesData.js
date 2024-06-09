import './ServicesData.css';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import OurServices from '../OurServices/OurServices';


const ServicesData = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect( () => {
        fetch('/ServicesData.JSON')
        .then(res => res.json())
        .then(data => setServicesData(data))
    }, [])
    return (
        <div className='our-service'>
                <h1 className='text-center'>Our All Services</h1>
             <Row xs={1} md={4} className="g-4 mt-3">
            {
                servicesData.map(service => <OurServices
                    key={service.id}
                    ourService={service}
                    ></OurServices>)
            }
            </Row>
        </div>
    );
};

export default ServicesData;