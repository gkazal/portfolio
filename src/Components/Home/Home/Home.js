import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'

import pfimg from '../../../images/pf2__1_-removebg-preview.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import ProjectFeature from './ProjectFeature/ProjectFeature';
import Footer from './Footer/Footer';


const Home = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div className="bg">
            <Navbar></Navbar>
            <section >
                <div className="mt-5">
                    <Header></Header>
                </div>
            </section>

            <div className="">
                <div id="about">
                    <h2 className="font-weight-bold mt-5 pt-5" style={{ fontSize: '50px', color: '#7ee9db' }}>Who am I ?</h2>
                    <main style={{ height: '100%' }} className="row d-flex align-items-center mb-5">

                        <div data-Aos="zoom-in-down" className=" col-md-6 ">
                            <img style={{ height: '500px' }} src={pfimg} className="img-fluid" alt="" />
                        </div>
                        <div data-Aos="zoom-in-right" className=" col-md-4  offset-md-1 ">
                            <h1 className="text-bolt">I am <span style={{ color: '#258a7c' }}>Kazal Ghosh</span></h1>
                            <p>I am completed my graduation in Computer Science. I love explore new technologies. I am very passionate about software engineering. My focus is mainly on Web development. My core skill is based on React and JavaScript. Now I am  open to any job offers.</p>
                        </div>

                    </main>
                </div>
                <ProjectFeature></ProjectFeature>

                <Footer></Footer>

            </div>

        </div>
    );
};

export default Home;