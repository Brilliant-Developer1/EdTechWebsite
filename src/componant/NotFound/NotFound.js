
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center pt-5 mt-5'>
            <h1 className='text-danger'>404</h1>
            <h2>PAGE NOT FOUND</h2>
            <p>The page requested couldn't be found. This could be a spelling error in the URL or a removed page.</p>
            <Link to='/home'>
             <Button className='btn btn-danger rounded-pill'>Back Homepage</Button>
            </Link>
        </div>
    );
};

export default NotFound;