import React from 'react';
import image from './dj4.jpg';
import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src={image}
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Deepali Jain</h2>
            <p className="subtitle">"Fullstack Developer"</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    );
};