import React from 'react';
import { ThemeProvider } from 'styled-components';
import Svg from './pages/Svg';
import theme from './shared/styles/theme';

function App() {
  return (
    <ThemeProvider theme={{ theme }}>
      <Svg />
    </ThemeProvider>
  );
}

export default App;
