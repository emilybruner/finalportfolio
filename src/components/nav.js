import React from 'react';
import {NavLink} from 'react-router-dom'
import '../sass/nav.scss';

export default function Nav() {
    return (
        <nav class="navigation">
            <ul>Skills</ul>
            <ul><NavLink class='regnav' to='/AboutMe'>About</NavLink></ul>
            <ul>Contact</ul>
            <ul>Resume</ul>
            <ul ><NavLink class='circle-button' to='/projects'>Projects</NavLink> </ul>
        </nav>
    )
}