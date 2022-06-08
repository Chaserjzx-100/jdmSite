import React from 'react';

//To Destructure coming in:

// ....function Photo({imgPath, carName})

export default function A80(props) {


    return (
        <div className='photo text-center'>
            <img onMouseOver={() => console.log("this is a supra")} className='supra' src={props.photo.imgPath} width="225" height="200" alt="A80 Supra" />
            <h4 className='carProp'><i>{props.photo.carName}</i></h4>
        </div>
    )
}