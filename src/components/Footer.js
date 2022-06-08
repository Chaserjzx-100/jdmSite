import React from 'react';

export default function Footer() {
    return (
        <footer class="foot text-center">
            <div className='container'>
                <img className='logo' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-512.png"></img>
                <img className='logo' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-512.png"></img>
                <img className='logo' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-512.png"></img>
                <img className='logo' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"></img> <br></br>
            </div>

            <div className='rights container'>
                <small>@ 2022 McNeal development. All rights reserved.</small> <br></br>
                <small>Built with React</small>
            </div>

        </footer>
    )
}