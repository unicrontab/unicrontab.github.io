import React from 'react';
import styled from 'styled-components';
import { githubIcon, webIcon } from './icons';

const ProjectContainer = styled.div`
    display: grid;
    padding: calc(1rem);
    margin: calc(2rem);
    max-width: calc(50vw);
    grid-template-columns: auto auto;
    background-color: var(--background);
    justify-items: center;
    border-radius: 8px;
    --date-color: var(--text-color);

    &:hover {
        --date-color: var(--text-accent-color);
        color: var(--text-color-bright);
        background-color: var(--background-dark);
        box-shadow: 10px 10px 0px 0px rgba(--background);
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
    fill: var(--text-accent-color-light);
    padding: 0 20px;

    &:hover {
        fill: var(--text-accent-color);
        width: calc(4.1vw);
    }
`;

const Description = styled.p`
    grid-column: 1 / span 2;
    grid-row: 3;
`;

const DateBadge = styled.div`
    background-color: rgba(255,255,255,0.2);
    color: var(--date-color);
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
