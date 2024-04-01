import React from 'react';
import featureimage from '../images/Frame 19.png';

function Features() {
    return(
        <div id='features'> 
        <div className='features-model'>
            <img src={featureimage} alt='feature-image'/>
        </div>
        <div className='features-text'>
            <h2>Features</h2>
            <h3>This application software<span>is art</span></h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nisi itaque fugiat assumenda quis ab iure corrupti nobis aliquam animi dicta nostrum eligendi modi illo quasi qui, enim sapiente facere!
            </p>
            <button>View more features</button>
        </div>
        </div>
    )
}

export default Features;