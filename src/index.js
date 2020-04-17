import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { injectGlobal } from 'styled-components';
import * as theme from './theme';

injectGlobal`
    body {
        --dot-spacing: 8px;
        --dot-size: 1px;
        --background: ${theme.background};
        --background-dark: ${theme.backgroundDark};
        --background-light: ${theme.backgroundLight};
        --text-color: ${theme.textColor};
        --text-accent-color: ${theme.textAccentColor};
        --text-accent-color-light: ${theme.textAccentColorLight};
        --text-color-bright: ${theme.textColorBright};
        width: 100%;

        margin: 0px;
        padding: 0px;
        font-family: ${theme.font};
        background-color: #222222;
        /* background: 
          radial-gradient(var(--background) 15%, transparent 20%) 1px 1px, 
            radial-gradient(var(--background) 15%, transparent 20%) 1px 1px, 
              radial-gradient(var(--background-light) 15%, transparent 40%) var(--dot-size) var(--dot-size), 
                radial-gradient(var(--background-light) 15%, transparent 40%) var(--dot-size) var(--dot-size);
        background-color: #282828;
        background-size: var(--dot-spacing) var(--dot-spacing); */
    }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
