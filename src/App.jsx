import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { WatchListContextProvider } from 'contexts/WatchListContext';
import Header from 'components/Header';
import { CoinSummary, CoinDetails } from 'pages';
import 'App.css';

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
