import React from 'react';
import bugtracker from '../img/bugtracker2.jpg';
import kansha from '../img/kansha.png';
import professor from '../img/betterprof.PNG'

export default function Projects() {
    return (
        <div id='projects'>
            <h4>Featured Projects</h4>
            <div className='projects-container'>
                <div className='project-box'>
                    <div className='project-image-container'>
                        <img src={kansha} alt='gift box' className='project-pic'/>
                    </div>
                    <div className='project-summary-container'>
                        <h6 className='project-title'>Kansha Rewards</h6>
                        <p className ='project description'> A workplace recognition platform to appreciate peers through rewards and in-app messages. This was a build-on project where we completely overhauled the back end and front end to handle multiple user types and created the feature of organization accounts and administrator tools for monitoring employee activity and recognition.</p>
                        <p className='techstack'>Tech Stack:</p>
                        <p> React.js | Redux | Node.js | Express | Postgres | SASS</p>
                      
                    </div>
                    
                </div>
                
                    <div className='project-text-container'>
                                                
                        <p className='contributions'>My contributions:</p>
                        <ul>
                            <li>Updated onboarding process for administrators that allow them to set up an account for their organization and add employees as users.</li>
                            <li>Created new models and endpoints to allow for employees to be grouped into "Teams" which are managed by the administrator</li>
                            <li>Enhanced user and admin dashboards to create difference experiences for different user types</li>
                            <li>Front end testing using Jest</li>
                        </ul>  

                    <div className='button-container' id='first-buttons'>
                        <a href='http://www.kansharewards.com'><button>View Project</button></a>
                        <a href='https://github.com/emilybruner/kansha-fe'><button>View Code</button></a>
                    </div>    
                </div>
            
            </div>    
            <div className='projects-container'>
                <div className='project-box'>
                    
                    <div className='project-summary-container-mid'>
                        <h6 className='project-title'>Lambda Bug Tracker</h6>
                        <p className ='project description'>A web application that allows teams of developers to track bugs of projects they are working on and assign team members to be in charge of certain tasks. Built with a team of 6 other developers during a 30 hour hackathon.</p>
                        <p>Tech Stack:</p>
                        <p className='techstack'> React.js | Redux | Node.js | Express | Firebase | SASS</p>
                      
                    </div>
                    <div className='project-image-container' id='bigbug'>
                        <img src={bugtracker} alt='gift box' className='project-pic'/>
                    </div>
                    
                </div>
                
                    <div className='project-text-container'>
                        
                        
                        <p className='contributions'>My contributions:</p>
                        <ul>
                            <li>Collaborated and planned application architecture and features with a remote team</li>
                            <li>Styled the user dashboard using SCSS and some style libraries</li>
                            <li>Created cards that are used to track progress of each bug</li>
                        </ul>      
                </div>
                    <div className='button-container'>
                        <a href='https://lambda-bug-tracker.firebaseapp.com/'><button>View Project</button></a>
                        <a href='https://github.com/Lambda-Bug-Tracker/Front-End'><button>View Code</button></a>
                    </div> 
            
            </div>    
            <div className='projects-container'>
                <div className='project-box'>
                    <div className='project-image-container'>
                        <img src={professor} alt='gift box' className='project-pic'/>
                    </div>
                    <div className='project-summary-container'>
                        <h6 className='project-title'>Better Professor</h6>
                        <p className ='project description'>A full stack web application to assist professors in managing deadlines for their classNamees and keeping track of meetings. It allows users to create an account, add student accounts, and create events which can be tracked on a dashboard. This project was built with a team of 8 developers and a UX Designer.</p>
                        <p>Tech Stack:</p>
                        <p className='techstack'> React.js | Redux | Node.js | Express | Sqlite3 | Knex</p>
                      
                    </div>
                    
                </div>
                
                    <div className='project-text-container'>
                      
                        <p className='contributions'>My contributions:</p>
                        <ul>
                            <li>Solely worked as a back end developer for this project</li>
                            <li>Planned and structured a relational database to support the planned feature</li>
                            <li>Developed a RESTful API with authentication and detailed documentation for the front end developers</li>
                        </ul>      
                </div>
                <div className='button-container'>
                        <a href='https://betterprofessor25.herokuapp.com/docs/'><button>View Project</button></a>
                        <a href='https://github.com/bw-better-professor/backend'><button>View Code</button></a>
                    </div> 
            
            </div>    
        </div>
       
    )
}