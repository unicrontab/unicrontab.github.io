import React from 'react';
import styled from 'styled-components';

const IntroWrapper = styled.div`
    padding: calc(4rem);
    color: var(--text-color);
`;

const Intro = () => (
    <IntroWrapper>
        ... a collection of projects and ideas ...
    </IntroWrapper>
);

export default Intro;
