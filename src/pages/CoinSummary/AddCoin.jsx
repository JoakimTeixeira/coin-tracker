import { WatchListContext } from 'contexts/WatchListContext';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import coinsAPI from 'services/coinsAPI';

const AddCoin = () => {
  const { watchList, addCoin } = useContext(WatchListContext);
  const [availableCoins, setAvailableCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinsAPI.get('/coins/markets', {
        params: {
          ids: '',
          vs_currency: 'usd',
        },
      });

      const coinsWithoutWatchList = response.data.filter((coin) => !watchList.includes(coin.id));

      setAvailableCoins(coinsWithoutWatchList);
    };

    fetchData();
  }, [watchList]);

  const firstLetterToUppercase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="fas fa-plus" />
        {' ADD '}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {availableCoins.map((coin) => (
          <Dropdown.Item key={coin.id} onClick={() => addCoin(coin.id)}>
            {firstLetterToUppercase(coin.name)}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AddCoin;
