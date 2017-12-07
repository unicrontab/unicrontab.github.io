import React from 'react';
import './styles/Header.css';

const githubUrl = 'https://github.com/unicrontab';

const Header = () => (
    <div className="header">
        <h1 className="title">
            <span className="title-accent">[</span>
                Michael Wilson
            <span className="title-accent">]</span>
        </h1>
        <a className="subtitle" href={githubUrl}>@unicrontab</a>
    </div>
);

export default Header;
