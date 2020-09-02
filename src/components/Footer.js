import React from 'react';
import '../sass/Footer.scss';

export default function Footer() {
    return (
        <div class='footer-container'>
            <h2>Interested in learning more about the value I can bring to your team? Let's chat!</h2>
            <div class='icons-container'>
                <i class="fab fa-github fa-1x"></i>
                <i class="fab fa-linkedin-in fa-1x"></i>
                <i class="fab fa-twitter fa-1x"></i>
            </div>
            <div class='email-container'>
                <i class="far fa-envelope fa-1x"></i>
                <p>bruner.emilym@gmail.com</p>
            </div>
            <p class='copyright'>Copyright 2020 &copy; Emily Bruner</p>
            
        </div>
    )
}