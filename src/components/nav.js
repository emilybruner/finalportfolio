import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="navigation">
            <ul><a href='#skills'>Skills</a></ul>
            <ul><a href='#footer'>Contact</a> </ul>
            <ul><a href='https://drive.google.com/file/d/1IvcC4Bysav09i7Sl4Os39ki-WO0g4HTy/view?usp=sharing'>Resume</a> </ul>
            <ul ><a class='circle-button' href='#projects'>Projects</a> </ul>
        </nav>
    )
}