import React from 'react';
import A80 from './A80';

export default function Contact() {
    return (
        <div className='main text-center'>
            {/* <img onMouseOver={() => console.log("Nissan Silvia s15")} className='silvia img-fluid' src='blus15.jpg' alt='S15' /> */}
            <A80
                photo={{
                    carName: "Toyota Supra A80",
                    imgPath: "blus15.jpg"
                }}
            />
            <div className='h1 intro'>
                <h1>Devan McNeal</h1>
                <h2>FullStack Java Developer</h2>
                <h4>jdmpassion.com</h4>
                <h4>(704) 912-6081</h4>
            </div>
            <button type="emailButton" class="emailbtn btn btn-secondary btn-lg"><i class="material-icons">email</i>Dmcneal123@gmail.com</button>

            <div className='About container-fluid text-left'>
                <h3>About</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ab vero explicabo dolor eius,
                    quaerat
                    numquam
                    distinctio sint tempora accusamus, ullam fuga autem nam blanditiis. Eum est vel nisi cum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ab vero explicabo dolor eius,
                    quaerat
                    numquam
                    distinctio sint tempora accusamus, ullam fuga autem nam blanditiis. Eum est vel nisi cum!
                </p>

                <h3>Interests</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ab vero explicabo dolor eius,
                    quaerat
                    numquam
                    distinctio sint tempora accusamus, ullam fuga autem nam blanditiis. Eum est vel nisi cum!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum ab vero explicabo dolor eius,
                    quaerat
                    numquam
                    distinctio sint tempora accusamus, ullam fuga autem nam blanditiis. Eum est vel nisi cum!
                </p>
            </div>
        </div>

    )
}