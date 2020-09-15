import React from 'react';

export default function Footer() {
    return (
        <div className='footer-container' id='footer'>
            <h2>Interested in learning more about the value I can bring to your team? Let's chat!</h2>
            <div className='icons-container'>
                <i className="fab fa-github fa-1x"></i>
                <i className="fab fa-linkedin-in fa-1x"></i>
                <i className="fab fa-twitter fa-1x"></i>
            </div>
            <div className='email-container'>
                <i className="far fa-envelope fa-1x"></i>
                <p>bruner.emilym@gmail.com</p>
            </div>
            <p className='copyright'>Copyright 2020 &copy; Emily Bruner</p>
            
        </div>
    )
}