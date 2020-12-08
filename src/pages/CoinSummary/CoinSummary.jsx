import React from 'react';
import AddCoin from './AddCoin';
import { CoinList } from './CoinList';

const CoinSummary = () => (
  <section className="wrapper">
    <AddCoin />
    <CoinList />
  </section>
);

export default CoinSummary;
