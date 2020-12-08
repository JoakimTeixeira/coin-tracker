import { WatchListContext } from 'contexts/WatchListContext';
import React, { useContext, useEffect, useState } from 'react';
import coinsAPI from 'services/coinsAPI';
import Loading from 'components/Loading';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList, deleteCoin } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinsAPI.get('/coins/markets', {
        params: {
          ids: watchList.join(','),
          vs_currency: 'usd',
          order: 'market_cap_desc',
        },
      });

      setCoins(response.data);
      setIsLoading(false);
    };

    if (watchList.length > 0) {
      fetchData();
    } else {
      setCoins([]);
    }
  }, [watchList]);

  if (isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <ul className="list-unstyled p-0 m-0">
      {coins.map((coin) => <Coin key={coin.id} coin={coin} deleteCoin={deleteCoin} />)}
    </ul>
  );
};

export default CoinList;
