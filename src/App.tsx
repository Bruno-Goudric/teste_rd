/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import light from './styles/themes/default';
import dark from './styles/themes/blackfriday';
import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <Home toggleTheme={toggleTheme} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
