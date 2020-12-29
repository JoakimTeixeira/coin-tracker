import React from 'react';
import {
  BrowserRouter as Router, Redirect, Route, Switch,
} from 'react-router-dom';
import { WatchListContextProvider } from 'contexts/WatchListContext';
import Header from 'components/Header';
import { CoinSummary, CoinDetails } from 'pages';
import 'App.css';

const App = () => (
  <>
    <WatchListContextProvider>
      <span id="bg" />
      <div className="p-5">
        <Router basename={process.env.PUBLIC_URL}>
          <Header />
          <Switch>
            <Route exact path="/" component={CoinSummary} />
            <Route path="/coins/:id" component={CoinDetails} />
            <Redirect from="/coins" to="/" />
          </Switch>
        </Router>
      </div>
    </WatchListContextProvider>
  </>
);

export default App;
