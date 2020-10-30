import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light  " style={{backgroundColor:'rgb(157, 198, 245)'}}>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse mt-2 pt-2" id="navbarSupportedContent">
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-item ">
                    <a className="nav-link mr-3" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>

                <li>
                    <a className="nav-link mr-3" href="#about">About</a>
                </li>
                <li>
                    <a className="nav-link mr-3" href="#project">Project</a>
                </li>
                <li>
                    <a className="nav-link mr-3" href="/blogs">Blog</a>
                </li>
                <li>
                    <a className="nav-link mr-3" href="/cv">CV</a>
                </li>
                <li>
                    <a className="nav-link mr-3" href="/home">Contact Me</a>
                </li>
             

            </ul>

        </div>
    </nav>
    );
};

export default Navbar;