import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import img1 from '../../../images/creative-agency.png'
import img2 from '../../../images/volunteer.png'
import img3 from '../../../images/travelguru.png'
import pfimg from '../../../images/pf2__1_-removebg-preview.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTaxi } from '@fortawesome/free-solid-svg-icons';


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
                            <a href="https://drive.google.com/drive/u/0/folders/1v_W0_D9T8de3kiG_8r3dOHnQCLJ2B1Ft" target="_blank">
                            </a>
                        </div>

                    </main>

                </div>

                {/* Projectss... */}
                <div id="project" className="mt-5 pt-5 col-md-10 offset-md-1" data-Aos="zoom-in-right">
                    <h2 className="font-weight-bold mt-5 pt-5" style={{ fontSize: '50px', color: '#7ee9db' }}>My Projects</h2>
                    <div className="projects mt-4 mb-5">

                        <div class="row card-deck d-flex justify-content-center">
                            <div className="col-md-4 col-sm-10">
                                <div class="card ">
                                    <div class="text-center ">
                                        <img style={{ width: '100%' }} src={img1} class="card-img-top rounded mx-auto d-block" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Creative Agency</h5>
                                            <p class="card-text">Creative Agency is such kind of software where clients can order any kind of projects. </p>
                                            <a href="/project" style={{ backgroundColor: '#7ee9db' }} class="btn">Details</a>
                                            <a href="https://github.com/gkazal/creative-agency-client" target="_blank" style={{ backgroundColor: '#7ee9db' }} class="btn">Github</a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-10">

                                <div class="card">
                                    <div class="text-center ">
                                        <img style={{ width: '100%' }} src={img2} class="card-img-top rounded mx-auto d-block" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Volunteer Network</h5>
                                            <p class="card-text">This is a public site, where people volunteering any things.</p>
                                            <a href="/project" style={{ backgroundColor: '#7ee9db' }} class="btn">Details</a>
                                            <a href="https://github.com/gkazal/volunteer-network" target="_blank" style={{ backgroundColor: '#7ee9db' }} class="btn">Github</a>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-sm-10">

                                <div class="card">
                                    <div class="text-center ">
                                        <img style={{ width: '100%' }} src={img3} class="card-img-top rounded mx-auto d-block" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Travel Agency</h5>
                                            <p class="card-text">Travel agency software like any people go any places and order any hotels that places.</p>
                                            <a href="/project" style={{ backgroundColor: '#7ee9db' }} class="btn">Details</a>
                                            <a href="https://github.com/gkazal/travel-guru" target="_blank" style={{ backgroundColor: '#7ee9db' }} class="btn">Github</a>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* <a style={{ fontSize: '40px' }} className="nav-link mr-3" href="/project">Details</a> */}
                    </div>
                </div>


                {/* // resume... */}
                <div id="contact" className="mt-5 pt-5 col-md-10 offset-md-1" data-Aos="zoom-in-right">
                    <h2 className="font-weight-bold mt-5 pt-5 mb-5" style={{ fontSize: '50px', color: '#7ee9db' }}>Contact</h2>
                    <div className="container">
                        <form>
                            <div class="form-group ">
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Your Email Address" />
                            </div>
                            <div class="form-group ">
                                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Your Name/Company Name" />
                            </div>
                            <div>
                                <form>
                                    <textarea placeholder="Your Message.."></textarea>
                                </form>
                            </div>
                            <div>
                                <a href="" style={{ backgroundColor: '#7ee9db' }} class="btn">Send</a>
                            </div>
                        </form>
                    </div>


                </div>



            </div>

        </div>
    );
};

export default Home;