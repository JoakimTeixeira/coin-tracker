import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import { formatCurrency } from 'utils/formatCurrency';

const CoinData = ({ chartData }) => {
  if (chartData.coin) {
    return (
      <div className="card">
        <Row className="d-flex flex-md-row flex-column align-items-center justify-content-center text-center">
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Total Supply</span>
              <span>{formatCurrency(chartData.coin.total_supply)}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Circulating Supply</span>
              <span>{formatCurrency(chartData.coin.circulating_supply)}</span>
            </div>
          </Col>
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Market Cap</span>
              <span>{formatCurrency(chartData.coin.market_cap)}</span>
            </div>

            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Volume (24h)</span>
              <span>{formatCurrency(chartData.coin.total_volume)}</span>
            </div>

          </Col>
          <Col>
            <div className="d-flex flex-column">
              <span className="card-label text-muted">High (24h)</span>
              <span>{formatCurrency(chartData.coin.high_24h)}</span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="card-label text-muted">Low (24h)</span>
              <span>{formatCurrency(chartData.coin.low_24h)}</span>
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
