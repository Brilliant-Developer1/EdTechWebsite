import './Home.css';

import React, { useEffect, useState } from 'react';
import { Carousel, Row} from 'react-bootstrap';
import HomeServices from '../Home-services/HomeServices';
import Benefits from '../Benefits/Benefits';
import { Link } from 'react-router-dom';

const Home = () => {
    const [services, setServices] = useState([])

    useEffect( () =>{
        fetch('/HomeServices.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Learn New Things Daily</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Second slide"
        />
    
        <Carousel.Caption>
          <h3>Focus on your Code</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Third slide"
        />
    
        <Carousel.Caption className='text-dark'>
          <h3>We can Teach you</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

        <div className='mt-4 mb-4'>
        <h1 className='text-center'>Our Services</h1>
        <Row xs={1} md={4} className="g-4 mt-2">
        
        {
          services.map(service => <HomeServices
              key={service.id}
              service={service}
              ></HomeServices>)
        }
        </Row>
        </div>
        <Link className='view-all text-secondary' to='/services'>View All</Link>
        <Benefits></Benefits>
        </div>
       
    );
};

export default Home;