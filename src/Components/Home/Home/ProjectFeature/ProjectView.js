import React from 'react';

const ProjectView = ({ projects }) => {
    const { name, image } = projects;

    const cardStyle = {
        img: {
            width: '100%',
            height: '200px',
            align: 'center'
        },

        buttonStyle: {
            border: '2px solid ',
            backgroundColor: '#7ee9db', margin: '5px'
        }
    }
    return (
        <div className="">
            <div className="">
                <div style={{ margin: '10px', borderRadius: '20px', padding: '10px',boxShadow: '0px 10px 40px rgb(0 0 0 / 10%' }}>
                    <img style={cardStyle.img} class="card-img-top" src={image} alt="Card image cap" />
                    <div class="card-body" style={{ listStyle: 'none' }}>
                        <h4 class="card-title">{name}</h4>

                        <div className="row">
                            <a style={cardStyle.buttonStyle} className="nav-link mr-3" href="/project" className="btn btn-lg btn-block">View Details</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectView;