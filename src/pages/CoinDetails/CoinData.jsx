import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

const CoinData = ({ chartData }) => {
  if (chartData.coin) {
    return (
      <div className="card">
        <Row className="d-flex flex-md-row flex-column align-items-center justify-content-center text-center">
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Market Cap</span>
              <span>{`$${chartData.coin.market_cap}`}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Total Supply</span>
              <span>{`$${chartData.coin.total_supply}`}</span>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Volume (24h)</span>
              <span>{`$${chartData.coin.total_volume}`}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">High (24h)</span>
              <span>{`$${chartData.coin.high_24h}`}</span>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Circulating Supply</span>
              <span>{`$${chartData.coin.circulating_supply}`}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Low (24h)</span>
              <span>{`$${chartData.coin.low_24h}`}</span>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  return <div />;
};

export default CoinData;

CoinData.propTypes = {
  chartData: PropTypes.string.isRequired,
};
