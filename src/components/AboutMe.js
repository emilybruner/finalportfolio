import React from 'react';
import bitmoji from '../img/bitmoji.PNG';


export default function AboutMe() {
    return (
        <div>
            <div className='about-container'>
                <h2>Full Stack Web Developer</h2>
                <h4 className='subheading'>I create elegantly simple solutions with carefully crafted code, and I love what I do.</h4>
                <div className='bitmoji-container'>
                    <img className='bitmoji-pic' src={bitmoji} alt='bitmoji'/>
                </div>
                
                
            </div>
            <div className='paragraph-container'>
            <h3>Hi, I'm Emily. Nice to meet you.</h3>
            <p className='aboutme-p'>I'm a web developer based in Cary, NC experienced in developing web applications for both business and consumer use. I'm naturally curious and constantly learning new ways to solve problems. </p>
           </div>


            
        </div>
        
    )
}