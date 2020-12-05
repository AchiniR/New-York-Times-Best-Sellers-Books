import React from 'react';

const AppNavbar = () => {
  
    return (
        <div>
            <ul>
                <li><a className="active" href="/">Home</a></li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Fiction</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Non-Fiction</a>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                    </div>
                </li>
                <li className="dropdown">
                    <a href="javascript:void(0)" className="dropbtn">Other</a>
                    <div className="dropdown-content">
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
