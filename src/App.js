import React from 'react';
import Header from './Header';
import Intro from './HeaderIntro';
import ProjectList from './ProjectList';
import Splash from './Splash';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const AppWrapper = styled.div`
    text-align: center;
    display: grid;
    margin: 0px;
    padding: 0px;
`;

const Portfolio = () => (
    <AppWrapper>
        <Header />
        <Intro />
        <ProjectList />
    </AppWrapper>
);

const App = () => (
    <Router>
        <Route exact path="/" component={Splash} />
        <Route path="/portfolio" component={Portfolio} />
    </Router>
);

export default Portfolio;
