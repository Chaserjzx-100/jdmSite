import React from 'react';

export default function S180sx(props) {

    return (
        <div className='photo text-center'>
            <img onMouseOver={() => console.log("Nissan 180sx")} className='180sx' src={props.photo.imgPath} width="225" height="200" alt="180sx" />
            <h4 className='carName'><i>{props.photo.carName}</i></h4>
        </div>
    )
}