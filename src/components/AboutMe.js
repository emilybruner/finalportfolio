import React from 'react';
import bitmoji from '../img/bitmoji.PNG';


export default function AboutMe() {
    return (
        <div>
            <div class='about-container'>
                <h2>Full Stack Web Developer</h2>
                <h4 class='subheading'>I create elegantly simple solutions with carefully crafted code, and I love what I do.</h4>
                <div class='bitmoji-container'>
                    <img class='bitmoji-pic' src={bitmoji} alt='bitmoji'/>
                </div>
                
                
            </div>
            <div class='paragraph-container'>
            <h3>Hi, I'm Emily. Nice to meet you.</h3>
            <p class='aboutme-p'>I'm a web developer based in Cary, NC experienced in developing web applications for both business and consumer use. I'm naturally curious and constantly learning new ways to solve problems. </p>
           </div>


            
        </div>
        
    )
}