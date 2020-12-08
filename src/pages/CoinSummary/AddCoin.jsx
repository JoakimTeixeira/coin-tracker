import { WatchListContext } from 'contexts/WatchListContext';
import React, { useContext, useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import coinsAPI from 'services/coinsAPI';

const AddCoin = () => {
  const { watchList, addCoin } = useContext(WatchListContext);
  const [availableCoins, setAvailableCoins] = useState([]);

  const sortArrayOfObjects = (arrayOfObjects, searchValue) => {
    const compareValues = ((a, b) => {
      const valueA = a[searchValue].toLowerCase();
      const valueB = b[searchValue].toLowerCase();

      let comparison = 0;

      if (valueA > valueB) {
        comparison = 1;
      } else if (valueA < valueB) {
        comparison = -1;
      }
      return comparison;
    });

    return arrayOfObjects.sort(compareValues);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await coinsAPI.get('/coins/markets', {
        params: {
          ids: '',
          vs_currency: 'usd',
        },
      });

      const coinsWithoutWatchList = response.data.filter((coin) => !watchList.includes(coin.id));
      setAvailableCoins(sortArrayOfObjects(coinsWithoutWatchList, 'id'));
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
