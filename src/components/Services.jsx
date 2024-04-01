import React from 'react';
import Box from './Box';
import image1 from '../images/s1.png';
import image2 from '../images/s2.png';

function Services() {
    return (
        <div id='services'>
            <div className='s-heading'>
                <h1>Services</h1>
                <p>Here are some services provided by the software.</p>
                </div>   
                <div className='b-container'>
                    <Box img={image1} alt='image1' button='React'/>
                    <Box img={image2} alt='image2' button='Python'/>
                </div>         
        </div>
    )
}

export default Services;