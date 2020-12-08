import { WatchListContext } from 'contexts/WatchListContext';
import React, {
  forwardRef, useContext, useEffect, useState,
} from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import coinsAPI from 'services/coinsAPI';
import { sortArrayOfObjects, firstLetterToUppercase } from 'utils';

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
      setAvailableCoins(sortArrayOfObjects(coinsWithoutWatchList, 'id'));
    };

    fetchData();
  }, [watchList]);

  const SearchBoxMenu = forwardRef(
    ({
      children, style, className, 'aria-labelledby': labeledBy,
    }, ref) => {
      const [value, setValue] = useState('');

      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type coin name..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) => !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <i className="fas fa-plus" />
        {' ADD '}
      </Dropdown.Toggle>
      <Dropdown.Menu as={SearchBoxMenu}>
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
