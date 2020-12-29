import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import { WatchListContextProvider } from 'contexts/WatchListContext';
import Header from 'components/Header';
import { CoinSummary, CoinDetails } from 'pages';
import 'App.css';

const App = () => (
  <>
    <WatchListContextProvider>
      <span id="bg" />
      <BrowserRouter basename="/coin-tracker">
        <div className="p-5">
          <Header />
          <Switch>
            <Route exact path="/" component={CoinSummary} />
            <Route path="/coins/:id" component={CoinDetails} />
            <Redirect from="/coins" to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </WatchListContextProvider>
  </>
);

export default App;
