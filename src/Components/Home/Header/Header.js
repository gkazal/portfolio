import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import './Header.css'
import img from '../../../images/pf2__1_-removebg-preview.png'
import { Fade } from "react-slideshow-image";
import { useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

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

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (

        <main style={{ height: '100%' }} className="row d-flex align-items-center mb-5">
            <div data-Aos="zoom-in-right" className=" col-md-4 offset-md-1 mt-4">
                <h1 className="text-bolt">Hey, I am <span style={{ color: '#258a7c' }}>Kazal Ghosh</span></h1>
                <h4>I am a Web Developer </h4>
                <a href="https://drive.google.com/drive/u/0/folders/1sZ4ju41QrMrwSrBe624FeC0Mj-aUMLys" target="_blank">
                    <a style={{ backgroundColor: '#7ee9db', color:'black' }} class="btn">Download Resume</a>
                </a>
            </div>
            <div data-Aos="zoom-in-down" className=" col-md-6 mt-5">
                <img style={{ height: '500px' }} src={img} className="img-fluid" alt="" />
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