import React, { Component } from 'react';
import { Navbar, NavbarBrand,NavbarToggler,Nav, Collapse, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import {NavLink} from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props);
        this.state ={
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav(){
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }

    render(){

        return(
            <div className="navbar_style">
                <Navbar dark expand="md" >
                    <div className="container justify-content-md-end">
                            <div>
                                <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav navbar>
                                        <NavItem>
                                        <NavLink className="nav-link" to="/home" activeStyle={{ color: "gray" }}>
                                                <span className="text-dark">Home</span>
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="/" activeStyle={{ color: "gray" }}>
                                            <span className="text-dark">About Us</span>
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                            <span className="text-dark">Problem</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                            <span className="text-dark">Achievements</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret className="text-secondary">
                                                <span className="text-dark">Get Involved</span>
                                                </DropdownToggle>
                                                <DropdownMenu right> 
                                                    <DropdownItem>
                                                        <NavLink className="nav-link" to ="/login" activeStyle={{color:"gray"}}>
                                                        <span className="text-dark">Sign Up</span>
                                                        </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                        <span className="text-dark">Select a Child</span>
                                                    </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                        <span className="text-dark">Sponsor</span>
                                                    </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                        <span className="text-dark">Track Progress</span>
                                                    </NavLink>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="/login" activeStyle={{ color: "gray" }}>
                                            <span className="text-dark">Sign In</span>
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                            <span className="text-dark">Contact Us</span>
                                        </NavLink>
                                        </NavItem>
                                    </Nav> 
                                </Collapse>
                            </div>
                        </div>
                </Navbar>
            </div>
        );


    }
}

export default Header;