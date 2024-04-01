import React from 'react';

function Box(props) {
    return (
        <div className='s-box'>
            <div className='s-b-image'>
                <img src={props.image} alt={props.alt}/>
            </div>
            <div className='s-b-text'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem sint suscipit error delectus nostrum reiciendis laudantium sit! Consectetur vel quasi ea quaerat quis obcaecati, non fuga quas reprehenderit optio sapiente.</p>
            <a href='#' className='cv-btn'>{props.button}</a>
            </div>
        </div>
    )
}

export default Box;