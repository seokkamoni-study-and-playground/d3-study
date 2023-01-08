import React from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './pages/Main';
import theme from './shared/styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
