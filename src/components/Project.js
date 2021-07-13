import React from 'react'

const Project = (props) => {
    return (
        <div className= 'project-card'>
            <img src= {`../images${props.project.img}`} alt= {props.project.name}/>
            <div>
                <h2>{props.project.name}</h2>
                <ul>
                    {props.project.tools.map(tool => <li>{tool}</li>)}
                </ul>
                <a href={props.project.link} target= '_blank' rel= 'noreferrer'>Deployed Link</a>
            </div>

        </div>
    )
}
export default Project
