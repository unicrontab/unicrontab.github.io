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

const bulger = keyframes`
    0%, 100% {
        transform: translateY(calc(-0.5vh));
    }
    50% {
        transform: translateY(calc(0.5vh));
    }
`;

const HeaderTitle = styled.h1`
    color: var(--text-accent-color);
    font-size: 2em;
    animation: ${bulger} 2s ease-in-out infinite;

    @media (max-width: 500px) {
        font-size: 1.5em;
    }

`;

const Accent = styled.span`
    padding: 0 calc(2vw);
    color: var(--text-accent-color);
    font-size: 2.5em;
    font-weight: 100;
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
