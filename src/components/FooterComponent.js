import React from 'react'
import {Link} from  'react-router-dom'
import Facebook from '../assets/Facebook.png'
import Youtube from '../assets/Youtube.png'
import Twitter from '../assets/Twitter.png'
import Instagram from '../assets/Instagram.png'





function FooterComponent() {
    return (
        <footer>        
            <h1>
                Perho Pakistan
            </h1>
            <div className='website_links'>
                <ul>
                    <li><Link>Home</Link></li>
                    <li><Link>About us</Link></li>
                    <li><Link>Contact us</Link></li>
                    <li><Link>Sponsor a Child</Link></li>
                    <li><Link>FAQ</Link></li>
                </ul>
            </div>
            <div className='social_links_sec'>
                <h3>Follow us</h3>
                <div>
                    <a href='?' className='social_link'><img src={Youtube} alt='Youtube'/></a>
                    <a href='?' className='social_link'><img src={Facebook} alt='Facebook' /></a>
                    <a href='?' className='social_link'><img src={Twitter} alt='Twitter' /></a>
                    <a href='?' className='social_link'><img src={Instagram} alt='Instagram' /></a>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent
