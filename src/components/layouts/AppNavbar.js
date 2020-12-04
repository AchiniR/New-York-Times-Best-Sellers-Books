import React, { useState, Fragment }  from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  

const AppNavbar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
            <ul>
                <li><a class="active" href="/">Home</a></li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Fiction</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Non-Fiction</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                    </div>
                </li>
                <li class="dropdown">
                    <a href="javascript:void(0)" class="dropbtn">Other</a>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                    </div>
                </li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </div>
    )
}

export default AppNavbar
