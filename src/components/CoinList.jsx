import { WatchListContext } from 'contexts/WatchListContext';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import coinsAPI from 'services/coinsAPI';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { watchList } = useContext(WatchListContext);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await coinsAPI.get('/coins/markets', {
        params: {
          ids: watchList.join(','),
          vs_currency: 'usd',
        },
      });

      setCoins(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const Coin = ({ coin }) => (
    <li className="card">
      <Link to="/coindetails" className="link text-dark">
        <Row className="d-flex flex-md-row flex-column align-items-center justify-content-center text-center">
          <Col className="p-2">
            <div>
              <img src={coin.image} alt={coin.id} width="50px" />
              <span className="ml-3">{coin.name}</span>
            </div>
          </Col>
          <Col className="p-2">
            <span>{`$${coin.current_price}`}</span>
          </Col>
          <Col className={coin.price_change_percentage_24h < 0
            ? 'text-danger p-2'
            : 'text-success p-2'}
          >
            <span>
              {coin.price_change_percentage_24h < 0
                ? <i className="fas fa-sort-down align-middle mr-2" />
                : <i className="fas fa-sort-up align-middle mr-2" />}
              {`${Number(coin.price_change_percentage_24h).toFixed(2)}%`}
            </span>
          </Col>
        </Row>
      </Link>
    </li>
  );

  const renderCoins = () => {
    if (isLoading) {
      return (
        <div className="pt-5 text-center">
          <i className=" fas fa-circle-notch fa-4x fa-spin text-white" />
        </div>
      );
    }

    return (
      <ul className="list-unstyled">
        {coins.map((coin) => <Coin key={coin.id} coin={coin} />)}
      </ul>
    );
  };

  Coin.propTypes = {
    coin: PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  };

  return (
    <div>
      {renderCoins()}
    </div>
  );
};

export default CoinList;
