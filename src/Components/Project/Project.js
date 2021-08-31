import React from 'react';
import Navbar from '../Home/Navbar/Navbar';
import img1 from '../../images/creative-agency.png'
import img2 from '../../images/volunteer.png'
import img3 from '../../images/digital-agency.png'
import img4 from '../../images/weather.png'

const Project = () => {
    return (
        <div>
            <Navbar></Navbar>
            <br />
            <h2>Here is some of my projects.</h2>

            <div className="card-deck d-flex justify-content-center">
                <div class="card mb-3 mt-5  col-md-11 " >
                    <div class="row no-gutters ">
                        <div class="col-md-4 mt-5">
                            <img src={img3} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Digital Agency</h3>
                                <p class="card-text"> Digital agency that is manipulated for creating a new website for customers.
   Clients can see all the services that the company created. Clients order any kind of project that the company services and give them feedback.

                            </p>
                                <h5 class="card-title">Technology</h5>
                                <li>
                                    HTML, CSS, BOOTSTRAP, MATERIAL UI, JAVASCRIPT, REACT JS,
                                    NODE JS, MONGO DB, FIREBASE AUTHENTICATION, HEROKU,
                                    REACT ROUTER
                            </li>
                                <a href="https://agency-9b47b.web.app/" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Live Demo here</button>
                                </a>
                                <a href="https://github.com/gkazal/agency-client" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-deck d-flex justify-content-center">
                <div class="card mb-3 mt-5  col-md-11 " >
                    <div class="row no-gutters ">
                        <div class="col-md-4 mt-5">
                            <img src={img1} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Creative Agency</h3>
                                <p class="card-text">This project is a service agency for creating different projects for any client.
                                Clients can see all the services that the company created. Clients order any kind of project that the company services and give them feedback
                            </p>
                                <h5 class="card-title">Technology</h5>
                                <li>
                                    HTML, CSS, BOOTSTRAP, MATERIAL UI, JAVASCRIPT, REACT JS,
                                    NODE JS, MONGO DB, FIREBASE AUTHENTICATION, HEROKU,
                                    REACT ROUTER
                            </li>
                                <a href="https://creative-agency-63cf9.web.app/" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Live Demo here</button>
                                </a>
                                <a href="https://github.com/gkazal/creative-agency-client" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-deck d-flex justify-content-center">
                <div class="card mb-3 mt-5  col-md-11 " >
                    <div class="row no-gutters ">
                        <div class="col-md-4 mt-5">
                            <img src={img2} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Volunteer Network</h3>
                                <p class="card-text">This is a service agency for create different projects for any client.
                                Clients can see all that services that company created.Clients order any kinds of project that company services and give them feedback

                            </p>
                                <h5 class="card-title">Technology</h5>
                                <li>
                                    HTML, CSS, BOOTSTRAP, MATERIAL UI, JAVASCRIPT, REACT JS,
                                    NODE JS, MONGO DB, FIREBASE AUTHENTICATION, HEROKU,
                                    REACT ROUTER
                            </li>
                                <a href="https://volunteer-f9618.web.app/" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Live Demo here</button>
                                </a>
                                <a href="https://github.com/gkazal/volunteer-network" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="card-deck d-flex justify-content-center">
                <div class="card mb-3 mt-5  col-md-11 " >
                    <div class="row no-gutters ">
                        <div class="col-md-4 mt-5">
                            <img src={img4} class="card-img" alt="..." />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h3 class="card-title">Weather Map</h3>
                                <p class="card-text">This project is a service agency for create different projects for any client.
                                Clients can see all that services that company created.Clients order any kinds of project that company services and give them feedback

                            </p>
                                <h5 class="card-title">Technology</h5>
                                <li>
                                    HTML, CSS, BOOTSTRAP, MATERIAL UI, JAVASCRIPT, REACT JS,
                                    NODE JS, MONGO DB, FIREBASE AUTHENTICATION, HEROKU,
                                    REACT ROUTER
                            </li>
                                <a href="https://gkazal.github.io/weather-app/" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Live Demo here</button>
                                </a>
                                <a href="https://github.com/gkazal/weather-app" target="_blank">
                                    <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Github</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
};

export default Project;