import React from 'react';
import CoinSummary from 'pages/CoinSummary';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Route exact path="/" component={CoinSummary} />
  </BrowserRouter>
);

export default App;
