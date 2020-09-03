import React from 'react';


export default function Skills() {
    return (
        <div class='skills-container' id='skills'>
          <div class='column-container'>
            <i class="fas fa-file-code fa-3x" ></i>
            <h5 class='skills-heading'>Front End</h5>
            <ul>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>Bootstrap</li>
            </ul>
            
          </div>
          <div class='column-container' id='middle-container'>
            <i class="fas fa-database fa-3x"></i>
            <h5 class='skills-heading'>Back End</h5>
            <ul>
            <li>Python</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>SQL</li>
            <li>Django</li>
            </ul>
          </div>
          <div class='column-container'>
            <i class="fas fa-hammer fa-3x"></i>
            <h5 class='skills-heading'>Tools</h5>  
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