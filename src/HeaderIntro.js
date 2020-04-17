import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    padding: calc(4rem);
    color: var(--text-color);
`;

const Header = () => (
    <HeaderWrapper>
        ... a collection of projects and ideas ...
    </HeaderWrapper>
);

export default Header;
