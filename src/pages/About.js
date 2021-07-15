import React from 'react'
import Me from '../images/profile_IMG_5989.png'

const About = () => {
    return (
        <div className= 'About'>
           <img src= {Me} alt= 'Erin'/>
           <div className= 'About-Details'>
               <h2>Full Stack Developer</h2>
               <p>Currently studying full-stack programming through the University of Washington</p>

           </div>
        </div>
    )
}

export default About
