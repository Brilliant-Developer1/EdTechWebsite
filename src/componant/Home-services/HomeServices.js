import './Home-services.css';
import { Button, Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeServices = (props) => {
   const {title,img,creator,rating,duration,price,price2} = props.service
    return (
        <div>
        <Col>
        <Card className='card-style'>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text className='text-secondary'>
              Course by <span className='text-primary'>{creator}</span>
            </Card.Text>
            <div className='d-flex justify-content-between'>
                <div className='mt-1'>
                <Rating
                placeholderRating={rating}
                emptySymbol='far fa-star'
                placeholderSymbol='fas fa-star'
                fullSymbol='fas fa-star'/><span className='ms-1'>{rating}</span>
                </div>
                <div>
                    <Button variant='dark'>Purchase</Button>
                </div>
            </div>
            <hr />
            <div className='d-flex justify-content-between'>
                <div >
                <FontAwesomeIcon icon={faClock} />
                <span className='ms-1 text-secondary fw-bold'>{duration} week</span>
                </div>
                <div>
                    ${price}.0 <span className='text-secondary price-2'>${price2}.0</span>
                </div>
            </div>
          </Card.Body>
        </Card>
        
      </Col>
      
        </div>
    );
};

export default HomeServices;