import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="card-title">Project Title - {id}</span>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur qui laudantium exercitationem inventore fugiat, incidunt voluptatum alias eum aspernatur pariatur corporis corrupti, cumque repudiandae ad sit asperiores eos veritatis aliquid!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur qui laudantium exercitationem inventore fugiat, incidunt voluptatum alias eum aspernatur pariatur corporis corrupti, cumque repudiandae ad sit asperiores eos veritatis aliquid!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur qui laudantium exercitationem inventore fugiat, incidunt voluptatum alias eum aspernatur pariatur corporis corrupti, cumque repudiandae ad sit asperiores eos veritatis aliquid!
                </p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
                <div>Posted by, Jay Bhatt</div>
                <div>3rd March, 8 A.M</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails;

