import React from 'react';
import CoinSummary from 'pages/CoinSummary';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from 'components/Header';
import 'App.css';
import { WatchListContextProvider } from 'contexts/WatchListContext';
import CoinDetails from 'pages/CoinDetails';

const App = () => (
  <>
    <WatchListContextProvider>
      <span id="bg" />
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummary} />
        <Route path="/coins/:id" component={CoinDetails} />
      </BrowserRouter>
    </WatchListContextProvider>
  </>
);

export default App;
