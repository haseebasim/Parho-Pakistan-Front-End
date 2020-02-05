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
                                        <NavLink className="nav-link" to="/home" activeClassName="selected" activeStyle={{ color: "gray" }}>
                                                Home
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="/" activeStyle={{ color: "gray" }}>
                                                About Us
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                Problem
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                Achievements
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <UncontrolledDropdown nav inNavbar>
                                                <DropdownToggle nav caret className="text-secondary">
                                                    Get Involved
                                                </DropdownToggle>
                                                <DropdownMenu right> 
                                                    <DropdownItem>
                                                        <NavLink className="nav-link" to ="/login" activeStyle={{color:"gray"}}>
                                                            Signup
                                                        </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                            Select a child
                                                    </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                            Sponsor
                                                    </NavLink>
                                                    </DropdownItem>
                                                    <DropdownItem>
                                                    <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                            Track Progress
                                                    </NavLink>
                                                    </DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledDropdown>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="/login" activeStyle={{ color: "gray" }}>
                                                Signin
                                        </NavLink>
                                        </NavItem>
                                        <NavItem>
                                        <NavLink className="nav-link" to="" activeStyle={{ color: "gray" }}>
                                                Contact Us
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