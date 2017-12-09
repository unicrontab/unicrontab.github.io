import React from 'react';
import styled, { extend } from 'styled-components';
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

    @media (max-width: 500px) {
        margin: calc(1rem);
        max-width: calc(90vw);
    }

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
    grid-row: 3;
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
    grid-row: 4;
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

// const ProjectImage = ({ className, image }) => {
//     if (!image) return null;
//     return (<img className={className} alt={image} src={image} />);
// };

// const StyledImage = styled(ProjectImage)`
//     grid-row: 2;
//     padding: 10px;
//     grid-column: 1 / span 2;
//     max-width: 100%;
//     opacity: 0.8;

//     &:hover {
//         opacity: 1.0;
//     }
// `;

const row = 2;
const StyledImage = styled.img([`
    grid-row: ${row};
    padding: 10px;
    grid-column: 1 / span 2;
    max-width: 100%;
    opacity: 0.8;

    &:hover {
        opacity: 1.0;
    }
`]);

const ProjectImage = ({ image }) => {
    if (!image) return null;
    return (<StyledImage alt={image} src={image} />);
};

const Project = props => (
    <ProjectContainer>
        <DateBadge>{props.project.date}</DateBadge>
        <ProjectTitle>{props.project.name}</ProjectTitle>
        <ProjectImage alt={props.project.date} image={props.project.image} />
        <Links>
            {createLink(props.project.url, webIcon)}
            {createLink(props.project.source, githubIcon)}
        </Links>
        <Description>{props.project.description}</Description>
    </ProjectContainer>
);

export default Project;
