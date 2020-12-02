import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Coin = ({ coin, deleteCoin }) => (
  <li className="card">
    <Link to={`/coins/${coin.id}`} className="link text-dark">
      <Row className="d-flex flex-md-row flex-column align-items-center justify-content-center text-center">
        <Col className="p-2">
          <img src={coin.image} alt={coin.id} width="50px" />
        </Col>
        <Col className="p-2">
          <span>{coin.name}</span>
        </Col>
        <Col className="p-2">
          <span>{`$${coin.current_price.toFixed(2)}`}</span>
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
        <Col className="delete" xs={12} md={1}>
          <i
            className="fas fa-trash-alt text-danger"
            onClick={(event) => {
              event.preventDefault();
              deleteCoin(coin.id);
            }}
            aria-hidden="true"
          />
        </Col>
      </Row>
    </Link>
  </li>
);

Coin.propTypes = {
  coin: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    current_price: PropTypes.number.isRequired,
    price_change_percentage_24h: PropTypes.number.isRequired,
  }).isRequired,
  deleteCoin: PropTypes.func.isRequired,
};

export default Coin;
