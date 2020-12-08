import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { WatchListContextProvider } from 'contexts/WatchListContext';
import Header from 'components/Header';
import { CoinSummary, CoinDetails } from 'pages';
import 'App.css';

const App = () => (
  <>
    <WatchListContextProvider>
      <span id="bg" />
      <BrowserRouter>
        <div className="p-5">
          <Header />
          <Route exact path="/" component={CoinSummary} />
          <Route path="/coins/:id" component={CoinDetails} />
          <Redirect from="/coins" to="/" />
        </div>
      </BrowserRouter>
    </WatchListContextProvider>
  </>
);

export default App;
