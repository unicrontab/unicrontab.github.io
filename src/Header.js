import React from 'react';
import styled, { keyframes } from 'styled-components';

const githubUrl = 'https://github.com/unicrontab';

const HeaderWrapper = styled.div`
    display: grid;
    background-color: var(--background);
    height: 150px;
    padding: 20px;
    color: white;
    justify-content: center;
`;

const HeaderTitle = styled.h1`
    color: var(--text-accent-color);
    font-size: 2em;
`;

const bulger = keyframes`
    0% {
        font-size: 1em;
    }
    100% {
        font-size: 2.2em;
    }
`;

const Accent = styled.span`
    padding: 0 calc(2vw);
    color: var(--text-accent-color);
    font-size: 2.5em;
    font-weight: 100;
    animation: ${bulger} 1s ease-out;
`;

const HeaderSubtitle = styled.a`
    color: var(--text-accent-color-light);
    font-size: 1.2em;
    font-weight: 100;
`;

const Header = () => (
    <HeaderWrapper>
        <HeaderTitle>
            <Accent>[</Accent>
                Michael Wilson
            <Accent>]</Accent>
        </HeaderTitle>
        <HeaderSubtitle href={githubUrl}>@unicrontab</HeaderSubtitle>
    </HeaderWrapper>
);

export default Header;
