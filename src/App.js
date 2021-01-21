import React from 'react';
import Routes from '../src/routes/index';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '../src/global';

const App = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);
export default App;
