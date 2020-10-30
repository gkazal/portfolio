import React from 'react';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import './Home.css'
import img1 from '../../../images/creative-agency.png'
import img2 from '../../../images/weather.png'
import img3 from '../../../images/travelguru.png'


const Home = () => {
    return (
        <div >
            <Navbar></Navbar>
            <div className="mt-5">
                <Header></Header>
            </div>

            <div className="container">

                <div id="about">
                    <h2 style={{ textAlignLast: 'start', fontSize: '50px' }}>Who am I ?</h2>
                    <div className=" mb-5 projects p-5">
                        <p>
                            Hello! This is Kazal Ghosh I am a passionate software engineer. My focus is mainly on web development. My core skill is based on JavaScript. <br /> I have completed my graduation from United International University in Computer Science. <br /> I am now open to any job offers.
                    </p>

                    </div>
                </div>

                {/* Projectss... */}
                <div id="project">
                    <h2 style={{ textAlignLast: 'start', fontSize: '50px' }}>My Projects</h2>
                    <div className="projects mb-5">

                        <p>Here is my projects that shown..</p>
                        <img style={{ width: '400px' }} src={img1} alt="" />
                        <img style={{ width: '400px' }} src={img2} alt="" />

                        <a style={{ fontSize: '40px' }} className="nav-link mr-3" href="/project">Deails</a>
                    </div>
                </div>

                {/* // resume... */}
                <div  id="project">
                    <h2 style={{ textAlignLast: 'start', fontSize: '50px' }}>My Experience</h2>
                    <div className="projects mb-5">

                        <p>Here is my projects that shown..</p>
                        <img style={{ width: '400px' }} src={img3} alt="" />

                        <a style={{ fontSize: '40px' }} className="nav-link mr-3" href="/project">Deails</a>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;