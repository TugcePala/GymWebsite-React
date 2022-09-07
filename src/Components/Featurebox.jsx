import React from 'react'

function Featurebox(props) {
    return (
        <div>
            <div className='a-box'>
                <div class='a-b-img'>
                    <img src={props.image} alt='' />
                </div>
                <div className='a-b-text'>
                    <h2> {props.title} </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    )
}

export default Featurebox
