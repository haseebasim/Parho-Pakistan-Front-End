import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import NavbarComponent from './NavbarComponent'
import LoginSignup from './LoginComponent'
import HomeComponent from './HomeComponent'
import FooterComponent from './FooterComponent'
import AboutComponent from './AboutComponent'
import SponsorComponent from './SponsorComponent'   
import ChildProfileComponent from './ChildProfileComponent'

function MainComponent() {
    return (
        <div>
            <NavbarComponent/>
            <Switch>
                <Route path="/home" component={HomeComponent}/>
                <Route path="/login" component={LoginSignup}/>
                <Route path='/about' component={AboutComponent}/>
                <Route path='/sponsor_child/:id' component={ChildProfileComponent}/>
                <Route path='/sponsor_child' component={SponsorComponent}/>
                <Redirect to="/home"/>
            </Switch>
            <FooterComponent/>
        </div>
    )
}

export default MainComponent