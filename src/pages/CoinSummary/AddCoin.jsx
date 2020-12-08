import React from 'react';
import { Dropdown } from 'react-bootstrap';

const AddCoin = () => {
  const availableCoins = [
    'bitcoin',
    'ethereum',
    'xrp',
    'ripple',
    'litecoin',
    'okb',
    'tezos',
    'cardano',
    'bitcoin-cash',
  ];

  const firstLetterToUppercase = (name) => name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Add Coin
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {availableCoins.map((coin) => (
          <Dropdown.Item href="!#">{firstLetterToUppercase(coin)}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default AddCoin;
