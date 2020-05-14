import React from 'react'
import ProfileImg from '../assets/sponsorcardimg.png'

function ChildProfileComponent(props) {
    console.log(props.match.params.id)
    return (

        <div>
            <video className='profile_vid' controls >
                <source src="" type="video/mp4"></source>
            </video>
            <div className='child_profile'>
                <div className='profile_img'> 
                    <img src={ProfileImg} alt='Profile img'/>
                </div>
                <div className='profile_content'>
                    <div className='profile_detail'>
                        <span>Name</span><p>Maryam</p>
                        <span>Age</span><p>11</p>
                        <span>Gender</span><p>Female</p>
                        <span>City</span><p>Gujranwala</p>
                    </div>
                    <h1>Wants to become a Doctor</h1>
                    <div className='profile_story'>
                        <h1>My Story:</h1>  
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum. Eget sit amet tellus cras. Vel pretium lectus quam id leo in. Eget arcu dictum varius duis at consectetur. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. At varius vel pharetra vel. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Nisl pretium fusce id velit ut tortor pretium. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChildProfileComponent
