import React from 'react';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './pages/Main';
import theme from './shared/styles/theme';

function App() {
  return (
    <ThemeProvider theme={{ theme }}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
