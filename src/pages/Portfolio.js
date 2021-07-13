import React from 'react'
import Project from '../components/Project'
import projectData from '../project-data'

const Portfolio = () => {
    return (
        <div className= 'portfolio'>
         {projectData.map(item =>(
             <Project project= {item}/>
         ))} 
        </div>
    )
}

export default Portfolio
