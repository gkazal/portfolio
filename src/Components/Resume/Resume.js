import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const Resume = () => {
    return (
        <div>
            <Navbar></Navbar>

            <h2>This is resume..</h2>
            <div class="card-deck d-flex justify-content-center ">

                <div className="card mt-5 m-5 p-5">
                    <div class="card-body card-body-cascade text-center">
                        <h1 class="card-title"><strong>Kazal Ghosh</strong></h1>
                        <h4 class="font-weight-bold indigo-text py-2">Web developer</h4>
                        <a href="https://drive.google.com/drive/u/0/folders/1sZ4ju41QrMrwSrBe624FeC0Mj-aUMLys" target="_blank">
                            <button type="button" class="btn " style={{ backgroundColor: '#7ee9db' }}>Download Resume</button>
                        </a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;