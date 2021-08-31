import React from 'react';
import img1 from '../../../../images/creative-agency.png'
import img2 from '../../../../images/volunteer.png'
import img3 from '../../../../images/digital-agency.png'
import ProjectView from './ProjectView';

const projects = [
    {
        name: 'Digital Agency',
        image: img3,
    },
    {
        name: 'Volunteer Network',
        image: img2
    },
    {
        name: 'Creative Agency',
        image: img1
    },
]

const ProjectFeature = () => {
    return (
        <section id="project"  style={{ paddingTop: '90px'}}>
            <div className="">
                <div className="text-center">
                    <h2>My Projects </h2>
                </div>
                <div className="d-flex justify-content-center ">
                    <div className="row">
                        {
                            projects.map(projects => <ProjectView projects={projects}></ProjectView>)
                        }
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectFeature;