import React from 'react';
import Header from './Header';
import Intro from './Intro';
import ProjectList from './ProjectList';
import styled from 'styled-components';

const AppWrapper = styled.div`
    text-align: center;
`;

const App = () => (
    <AppWrapper>
        <Header />
        <Intro />
        <ProjectList />
    </AppWrapper>
);

export default App;
