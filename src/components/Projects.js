import React from 'react';
import '../sass/Projects.scss'
import gift from '../img/gift.jpg'
import ladybug from '../img/ladybug.jpg'
import pencils from '../img/pencils.jpg'

export default function Projects() {
    return (
        <div>
            <h4>Featured Projects</h4>
            <div class='projects-container'>
                <div class='project-box'>
                <img src={gift} alt='gift box' class='project-pic'/>
                </div>
                <div class='project-box'>
                    
                </div>
                <div class='project-box'>
                    
                </div>
            
            </div>    
        </div>
               
    )
}