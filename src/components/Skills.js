import React from 'react';


export default function Skills() {
    return (
        <div className='skills-container' id='skills'>
          <div className='column-container'>
            <i className="fas fa-file-code fa-3x" ></i>
            <h5 className='skills-heading'>Front End</h5>
            <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Bootstrap</li>
            </ul>
            
          </div>
          <div className='column-container' id='middle-container'>
            <i className="fas fa-database fa-3x"></i>
            <h5 className='skills-heading'>Back End</h5>
            <ul>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Django</li>
            </ul>
          </div>
          <div className='column-container'>
            <i className="fas fa-hammer fa-3x"></i>
            <h5 className='skills-heading'>Tools</h5>  
            <ul>
<li>Git</li>
            <li>Github</li>
            <li>Jest</li>
            <li>Postman</li>
            <li>Visual Studio</li>
            </ul>
            
          </div>
            
        </div>
        
    )
}