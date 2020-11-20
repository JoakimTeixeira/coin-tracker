import React, { useEffect } from 'react';
import coinsAPI from 'services/coinsAPI';

const CoinList = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await coinsAPI.get('/coins/markets', {
        params: {
          ids: 'bitcoin, ethereum',
          vs_currency: 'usd',
        },
      });

      console.log(response.data);
    };

    fetchData();
  });

  return (
    <div>
      Coin list
    </div>
  );
};

export default CoinList;
