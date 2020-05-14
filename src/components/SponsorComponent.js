import React from 'react'
import {Link} from 'react-router-dom'
import ProfilesData from '../json.json'
import CardImg from '../assets/sponsorcardimg.png'
function SponsorComponent() {

    const Profiles = () =>{

        const SponsoredProfiles = ProfilesData.map((profile)=>{
            console.log(profile.id)
            return(<Link key={profile.id} to={`/sponsor_child/${profile.id}`} className='profile_card'>
                <div className='profile_card_img'>
                    <img src={CardImg} alt='profileIMG' />
                </div>
                <div className='profile_card_content'>
                    <span>Name</span><p>{profile.name}</p>
                    <span>Age</span><p> {profile.age}</p>
                    <span>Gender</span><p> {profile.gender}</p>
                    <span>City</span><p>{profile.city}</p>
                </div>
                <p>Wants to become a {profile.occupation}</p>
            </Link>)
        })

        return SponsoredProfiles
    }


    return (
        <div>
            <div className='sponsor_header'>
                <div className='bread_crumbs'>
                    <Link to='/home'>Home</Link> <span> > Sponsor a child</span> 
                </div>
                <h1>Sponsor A Child</h1>
            </div>
            <div className='sponsor_quote'>
                <p>“You cannot make people learn. You can only provide the right conditions for learning to happen.” </p>
                <p>~Vince Gowmon</p>
            </div>
            <div className='sponsor_filters'>
                <div>
                    <select id='province_filter' className='sponsor_selectors' name='Province'>
                        <option>Province</option>
                    </select>
                </div>
                <div>
                    <select id='province_filter' className='sponsor_selectors' name='Province'>
                        <option>City</option>
                    </select>
                </div>
                <div>
                    <select id='province_filter' className='sponsor_selectors' name='Province'>
                        <option>Gender</option>
                    </select>
                </div>
            </div>
            <div className='profiles_container'>
                <Profiles/>
            </div>
        </div>
    )
}

export default SponsorComponent
