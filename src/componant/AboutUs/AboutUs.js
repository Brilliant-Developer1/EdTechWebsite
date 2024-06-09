import './AboutUs.css';

import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <div className='text-center about-style'>
            <h1>About Us</h1>
            <div className='about-text'>
            <p className='p-5 '>We help organizations of all types and sizes prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help companies, governments, and nonprofits go further by placing learning at the center of their strategies.</p>
            </div>

            <div className='mt-5 mb-5'>
            <h1 className='review-header mb-5'>What our students <br /> have to say</h1>
            <CardGroup>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"/>
              <Card.Body>
                <Card.Title>Grace</Card.Title>
                <Card.Text>
                  This is a Best Organization supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Updated 2 week ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80" />
              <Card.Body>
                <Card.Title>Jimmy Adward</Card.Title>
                <Card.Text>
                  I Learned Progrraming text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Updated 1 month ago</small>
              </Card.Footer>
            </Card>
            <Card>
              <Card.Img variant="top" src="https://images.unsplash.com/photo-1529470839332-78ad660a6a82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
              <Card.Body>
                <Card.Title>Julia</Card.Title>
                <Card.Text>
                  Best Place to Learn Web developing a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Updated 3 days ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
            </div>
            
        </div>
    );
};

export default AboutUs;