import React from 'react';
import styled, { keyframes } from 'styled-components';
import linkData from './linkData';
import Links from 'my-links';

const githubUrl = 'https://github.com/unicrontab';

const HeaderWrapper = styled.div`
    display: grid;
    background-color: var(--background);
    color: white;
    padding-bottom: calc(1vh);
    justify-content: stretch;
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
    height: calc(5vh);
`;

const LinkWrapper = styled.div`
    height: calc(5vh);
`;

const StyledLinks = () => (
    <LinkWrapper>
        <Links data={linkData} color="rgba(0,255,255,0.8)" />
    </LinkWrapper>
);

const Header = () => (
    <HeaderWrapper>
        <StyledLinks data={linkData} color="rgba(0,255,255,0.8)" />
        <HeaderTitle>
            <Accent>[</Accent>
                Michael Wilson
            <Accent>]</Accent>
        </HeaderTitle>
        <HeaderSubtitle href={githubUrl}>@unicrontab</HeaderSubtitle>
    </HeaderWrapper>
);

export default Header;
