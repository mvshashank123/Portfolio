import React from 'react';
import {Link} from 'react-router-dom';


const ProjectCard = () => {
    return (
        <div className="projectCard">
            <Link className="projectCard__link">
               <figure className="projectCard__picwrap">
                   <img src="" alt=""/>
               </figure>
               <figure className="projectCard__info">
                   <h5 className="projectCard__text">hey</h5>
               </figure>  
            </Link>
        </div>
    )
}

export default ProjectCard
