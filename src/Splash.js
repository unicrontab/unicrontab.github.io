import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import mw from './MW.png';

const SplashWrapper = styled.div`
    align-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    /* padding: calc(4rem); */
    color: var(--text-color);
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    margin-left: -200px;
    margin-top: -150px;
`;

const Icon = styled.img`
    width: 400px;
    height: 200px;
    /* margin-top: -100px; 
    margin-left: -200px;  */
`;

const Name = styled.div`
    /* font: Roboto; */
    color: rgba(255,255,255,0.5);
    font-weight: lighter;
    letter-spacing: 4px;
`;

const Projects = styled.div`
    border-radius: 5px;
    padding: 10px;
    color: rgba(0,0,0,0.8);
    background-color: rgba(255,255,255,0.8);
    width: inherit;
    margin: 4vh;
    &:hover {
        color: rgba(255,255,255,0.8);
        background-color: rgba(255,255,255,0.1)
    }
`;



const Splash = withRouter(({history}) => (
    <SplashWrapper>
        <IconWrapper>
            <Icon src={mw} />
            <Name>
                michael.wilson
            </Name>
            <Projects onClick={() => history.push('/portfolio')}>PROJECTS</Projects>
        </IconWrapper>
    </SplashWrapper>
));


export default Splash;
