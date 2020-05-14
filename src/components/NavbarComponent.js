import React, {useState} from  'react'
import {Link} from 'react-router-dom'
import $ from 'jquery'





function NavbarComponent() {
    
    
    
    
    const [cross,toggle_cross] = useState(false)
    $(window).resize(() => {

        if ($(window).width() > '768') {
            $('.nav_container').removeAttr('style');

        }

    })


    const Scroll_to_div = (elem) =>{
        const top_offset= document.getElementById(elem);
        console.log(top_offset)
    }
    
    
    
    
    const togglerhandler = () => {
        $('.nav_container').fadeToggle().css({ 'background': '#292929' })
        toggle_cross(!cross)
    }   
    

    return (
        <div >
            <nav>
                <div className='toggler_container'>
                    <div type="button" id="toggler_btn" onClick={togglerhandler}>
                        <span className='btn_line top_line'> </span>
                        <span className='btn_line middle_line'> </span>
                        <span className='btn_line bottom_line'> </span>
                    </div>
                </div>
                <div className="nav_container"> 
                    <div className="nav_item">
                        <Link className='nav_link' to="/home">Home</Link>
                    </div>
                    <div className="nav_item">
                        <Link className='nav_link' to="/about">About Us</Link>
                    </div>
                    <div className="nav_item">
                        <span className='nav_link' onClick={Scroll_to_div('problem')} >Problem</span>
                    </div>
                    <div className="nav_item">
                        <a className='nav_link' href="/">Achievment</a>
                    </div>
                    <div className="nav_item dropdown_link">
                        <span className='nav_link'>Get Involved <span className="fa fa-angle-down"></span></span>
                        <div className="dropdown_container">
                            <div>
                                <Link className='nav_link' to='/login'>Signup</Link>
                            </div>
                            <div>
                                <Link className='nav_link' to='/sponsor_child'>Sponsor a child</Link>
                            </div>
                            <div>
                                <a className='nav_link' href='/'>Sponser</a>
                            </div>
                            <div>
                                <a className="nav_link" href='/'>Track Progress</a>
                            </div>
                        </div>
                    </div>
                    <div className="nav_item">
                        <a className='nav_link' href="/">Contact Us</a>
                    </div>
                    <div className="nav_item">
                        <Link className='nav_link' to="/login">Signup Today</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavbarComponent;
