import React from 'react';

const Resume = () => {
    return (
        <div>
            <h2>This is resume..</h2>
            <div class="card ">

                <div class="card-body card-body-cascade text-center">
                    <h1 class="card-title"><strong>Kazal Ghosh</strong></h1>
                    <h4 class="font-weight-bold indigo-text py-2">Web developer</h4>
                    <a href="https://drive.google.com/drive/u/0/folders/1v_W0_D9T8de3kiG_8r3dOHnQCLJ2B1Ft" target="_blank">
                        <button type="button" class="btn btn-success downCV">Download Resume</button>
                    </a>
                  
                </div>

            </div>
        </div>
    );
};

export default Resume;