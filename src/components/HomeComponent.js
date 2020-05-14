import React from 'react'
import {Link} from 'react-router-dom'
import Details_img from '../assets/sadboy.png'
import Stocks from '../assets/Stocks.png'
import Expenses from '../assets/expenses.png'
import Scholarcap from '../assets/scholarcap.png'
import Students from '../assets/students.png'
import SuccessStory from '../assets/successstory.png'
import HEC from '../assets/HEC.png'
import NationalFood from '../assets/nationalfood.png'
import CharityLife from '../assets/charitylife.png'
import RedBull from '../assets/redbull.png'


function HomeComponent() {
    return (
        <div>
            <div className="home_header">
                <div className="home_header_content">
                    <p>Educate Out-of-School Children</p>
                    <h1>PERHO PAKISTAN</h1>
                    <p className="header_quote">Education is the most powerful weapon which you can use to change the world.</p>
                    <p className="header_quote">~Nelson Mandela</p>
                    <div className="home_header_btn">
                        <Link to='/about'>Read More</Link>
                    </div>
                </div>
            </div>
            <div id="whyus">
                <div>
                    <video className='homepage_vid' controls >
                        <source src="" type="video/mp4"></source>
                    </video>
                    {/* <iframe title='whyus_video' className="homepage_vid" src="https://www.youtube.com/embed/iuNJLtj10Lg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                </div> 
                <div className="whyus_content">
                    <h1>WHY US?</h1>
                    <p>Perho Pakistan aims to promote education in Pakistan. We have developed a system to
                        enable out-of-school children to get the education they deserve with the help of the well-off and generous citizens. Our goal is to provide quality education to each and every child of this nation.</p>
                    <div className="whyus_btn">
                        <Link to='/about' >Read More</Link>
                    </div>
                </div>
            </div>
            <div id='problem' className="homepage_details">
                <div className="details_img_container">
                    <img src={Details_img} alt="details_pic"/>
                </div>
                <div className="details_content">
                    <div className="details">
                        <img src={Scholarcap} className="details_img" alt='scholarscap'/>
                        <p className="details_p">Pakistan has around 50 million children between the age of 5 and 16. Out of these, almost 23 million children are out of school.</p>
                    </div>
                    <div className="details2">
                        <img src={Expenses} className="details_img" alt='scholarscap' />
                        <p className="details_p">At the national level, 89% of the total education expenditure comprises of current expenses such as teachers’ salaries, while only 11% comprises of development expenditure which is not sufficient to raise quality of education. </p>
                    </div>
                    <div className="details">
                        <img src={Stocks} className="details_img" alt='scholarscap' />
                        <p className="details_p">Currently, Pakistan spends only 2.4% of its GDP on education.In the vision 2030, it was proposed to Increase public expenditure on education and skills generation from 2.7% of GDP to 5% by 2010 and 7% by 2015, but unfortunately these goals are still far from reality.</p>
                    </div>
                    <div className="details2">
                        <img src={Students} className="details_img" alt='scholarscap' />
                        <p className="details_p">As a result, Pakistan has the world’s second-highest number of out-of-school children at the primary level. Every 10th out-of-school child in the world is a Pakistani.</p>
                    </div>
                </div>
            </div>
            <div id='successstory'>
                <div className='success_header'>
                    <h1>Success Stories</h1>
                </div>
                <div className='success_carousel'>
                    <div className='carousel_icon'>
                        <span className='fa fa-chevron-left'></span>
                    </div>
                    <div className='carousel_content'>
                        <img id='carousel_img' src={SuccessStory} alt='carousel img'/>
                        <h3 className='carousel_header'>Ahmed Raza</h3>
                        <p className='carousel_description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    </div>
                    <div className='carousel_icon'>
                        <span className='fa fa-chevron-right'></span>
                    </div>
                </div>
            </div>
            <div id='sponsorship_sec'>
                <h1>sponsorship options</h1>
                <div className='sponsorships'>
                    <div id='basic_sponsor' className='sponsorship_card'>
                        <div className='card_header'>
                            <h2>BASIC</h2>
                        </div>
                        <div className='card_content'>
                            <ul>
                                <li><span className='donation_price'>Rs. 4,000</span>/month</li>
                                <li className='content_header'>Duration</li>
                                <li className='content_desc'>1 year</li>

                                <li className='content_header'>Books and Stationary</li>
                                <li className='content_desc'>Rs. 10,000/-</li>

                                <li className='content_header'>Uniform</li>
                                <li className='content_desc'>Rs. 10,000/-</li>

                                <li className='content_header'>Tution Fee</li>
                                <li className='content_desc'>Rs. 30,000/-</li>

                                <li className='content_header'>Pocket Money</li>
                                <li className='content_desc'>Rs. 10,000/-</li>
                            </ul>
                        </div>
                    </div>
                    <div id='Donation_sponsor' className='sponsorship_card'>
                        <div className='card_header'>
                            <h2>Donation</h2>
                        </div>
                        <div className='card_content'>
                            <ul>
                                <li><span className='donation_price'>Rs. 20,000</span>/month</li>
                                <li className='content_header'>Duration</li>
                                <li className='content_desc'>5 year</li>

                                <li className='content_header'>Books and Stationary</li>
                                <li className='content_desc'>Rs. 22,000/-</li>

                                <li className='content_header'>Uniform</li>
                                <li className='content_desc'>Rs. 21,000/-</li>

                                <li className='content_header'>Tution Fee</li>
                                <li className='content_desc'>Rs. 60,000/-</li>

                                <li className='content_header'>Pocket Money</li>
                                <li className='content_desc'>Rs. 18,000/-</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='sponsor_signup_btn'>
                    <Link to='/login'>Signup Today</Link>
                </div>
            </div>
            <div id='collaborator_sec'>
                <h1>Our Collaborators</h1>
                <div className='collab_img_container'>
                    <img src={NationalFood} alt='national foods'></img>

                    <img src={HEC} alt='HEC'></img>

                    <img src={RedBull} alt='Red bull'></img>

                    <img src={CharityLife} alt='Charity Life'></img>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent
