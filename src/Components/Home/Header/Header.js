import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Header.css'
import img from './images/profile2.png'
import { Fade } from "react-slideshow-image";
import { useState } from 'react';


const Header = () => {
    const [previousIndex, setPreviousIndex] = useState(null);
    const [nextIndex, setNextIndex] = useState(null);

    const style = {
        textAlign: "center",
        // padding: "200px 0",
        fontSize: "30px",
        height: "100%",
    };
    const properties = {
        autoplay: true,
        indicators: true,
        onChange: (previous, next) => {
            setPreviousIndex(previous);
            setNextIndex(next);
        }
    };
    return (


        <main style={{ height: '100%' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 className="text-bolt">Hey, I am Kazal Ghosh </h1>
                <p>I am passionate software engineer. My focus is mainly on web development. My core skill is based on JavaScript. <br /> I am now open to any job offers.</p>
                <a href="https://drive.google.com/drive/u/0/folders/1v_W0_D9T8de3kiG_8r3dOHnQCLJ2B1Ft" target="_blank">
                    <button type="button" class="btn btn-Warning downCV">Download Resume</button>
                </a>
            </div>
            <div className="col-md-6">
                <img src={img} className="img-fluid" alt="" />
            </div>

        </main>








        // <div >
        //     <div >
        //         <Fade {...properties}>
        //             <div className="d-flex justify-content-center" style={{ ...style }}>
        //                 {/* <div class="hero-image">
        //                     <div class="hero-text">
        //                         <h1 style={{fontSize:'50px'}}>I am John Doe</h1>
        //                         <p>And I'm a Photographer</p>
        //                         <button>Hire me</button>
        //                     </div>
        //                 </div> */}
        //                 <div className="row">
        //                     <div className="col-md-5 col-sm-10">
        //                         <div className="hero-text">
        //                             <h1>I am Kazal</h1>
        //                             <h6>I am a web developer</h6>
        //                             <a href="https://drive.google.com/drive/u/0/folders/1v_W0_D9T8de3kiG_8r3dOHnQCLJ2B1Ft" target="_blank">
        //                             <button type="button" class="btn btn-Warning downCV">Download Resume</button>
        //                         </a>

        //                         </div>

        //                     </div>
        //                     <div className="col-md-5 col-sm-10">
        //                         <img style={{ width: '600px' }} src={img} alt="" />

        //                     </div>

        //                 </div>
        //                 <div className="row">


        //                 </div>

        //             </div>
        //             <div style={{ ...style }}>
        //                 <img style={{ width: '600px' }} src={img} alt="" />
        //             </div>
        //             <div style={{ ...style }}>
        //                 <img style={{ width: '600px' }} src={img} alt="" />
        //             </div>

        //         </Fade>
        //     </div>
        //     {/* <p style={{ fontSize: "20px", textAlign: "center" }}>Transitioned from {previousIndex} to {nextIndex}</p> */}
        // </div>

    );
};

export default Header;