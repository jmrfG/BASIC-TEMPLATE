import React from "react";
import ReactDOM from "react-dom";
import App from './App'
import { theme } from './Helpers/theme';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { AppProvider } from './AppContext';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppProvider>
            <App>
            </App>
          </AppProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById('root')
)