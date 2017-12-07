import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import projectData from './projectData';

const ProjectContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    width: calc(100vw);
    height: calc(50vh);
    color: rgba(255,255,255,0.7);
    justify-content: center;


    @media (max-width: 800px) {
        grid-template-columns: auto auto;
    }
    @media (max-width: 500px) {
        grid-template-columns: auto;
    }
`;

const createProject = project => <Project key={project.url} project={project} />;

const ProjectList = () => (
    <ProjectContainer>
        {projectData.map(createProject)}
    </ProjectContainer>
);

export default ProjectList;
