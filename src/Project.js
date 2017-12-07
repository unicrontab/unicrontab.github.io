import React from 'react';
import styled from 'styled-components';
import { githubIcon, webIcon } from './icons';

const ProjectContainer = styled.div`
    display: grid;
    padding: calc(1rem);
    margin: calc(2rem);
    max-width: calc(50vw);
    grid-template-columns: auto auto;
    background-color: rgba(0,0,0,0.5);
    justify-items: center;
    

    &:hover {
        background-color: rgba(0,0,0,0.8);
    }
`;

const ProjectTitle = styled.h1`
    grid-column: 1 / span 2;
    grid-row: 1;
    min-height: calc(5vh);
`;

const Links = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-column: 1 / span 2;
    grid-row: 2;
    justify-items: center;
`;

const Link = styled.a`
    text-align: center;
    width: calc(4vw);
    fill: rgba(0,255,255,0.5);

    &:hover {
        fill: rgba(0,255,255,0.7);
        width: calc(4.1vw);
    }
`;

const Description = styled.p`
    grid-column: 1 / span 2;
    grid-row: 3;
`;

const DateBadge = styled.div`
    background-color: rgba(255,255,255,0.2);
    padding: 2px;
    position: absolute;
    width: inherit;
    text-align: right;
`;

const createLink = (url, icon) => {
    if (!url) return null;
    return <Link href={url}>{icon}</Link>;
};


const Project = props => (
    <ProjectContainer>
        <DateBadge>{props.project.date}</DateBadge>
        <ProjectTitle>{props.project.name}</ProjectTitle>
        <Links>
            {createLink(props.project.url, webIcon)}
            {createLink(props.project.source, githubIcon)}
        </Links>
        <Description>{props.project.description}</Description>
    </ProjectContainer>
);

export default Project;
