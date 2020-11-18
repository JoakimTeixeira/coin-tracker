import React from 'react';
import CoinSummary from 'pages/CoinSummary';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" component={CoinSummary} />
  </BrowserRouter>
);

export default App;
