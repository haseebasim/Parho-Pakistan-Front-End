import React from 'react'
import {Link} from 'react-router-dom'
import Img1 from '../assets/aboutcontentimg.png'

function AboutComponent() {
    return (
        <div>
            <div className='about_header'>
                <div className='bread_crumbs'>
                    <Link to='/home'>Home</Link> <span>> About us</span>
                </div>
                <h1>About Us</h1>
            </div>
            <div className='about_container'>
                <img src={Img1} alt='About Img'/>
                <div className='about_content'>
                    <h1>LET'S BUILD THE FUTURE</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum. Eget sit amet tellus cras. Vel pretium lectus quam id leo in. Eget arcu dictum varius duis at consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. At varius vel pharetra vel. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Nisl pretium fusce id velit ut tortor pretium. 
                    </p>
                </div>
            </div>
            <div className='about_signup'>
                <div className='signup_container'>
                    <h2>WANNA JOIN IN OUR MISSION ?</h2>
                    <Link to='/login'>Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent
