/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <Home />
    <GlobalStyle />
  </>
);

export default App;
