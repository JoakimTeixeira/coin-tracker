import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { chartConfig } from 'utils/chartConfig';

const CoinChart = ({ chartData }) => {
  const chartRef = useRef();
  const {
    day, week, year, coin,
  } = chartData;
  const [dayFormat, setDayFormat] = useState('24h');

  const chooseDayFormat = () => {
    switch (dayFormat) {
      case '24h':
        return day;
      case '7 days':
        return week;
      case '1 year':
        return year;
      default:
        return day;
    }
  };

  useEffect(() => {
    if (chartRef.current && coin) {
      if (window.chart !== undefined) {
        window.chart.destroy();
      }

      window.chart = new Chartjs(chartRef.current, {
        type: 'line',
        data: {
          datasets: [{
            label: `${coin.name} price (${dayFormat})`,
            data: chooseDayFormat(),
            backgroundColor: 'rgba(100, 132, 187, 0.5)',
            borderWidth: 1,
            pointRadius: 0,
          }],
        },
        options: chartConfig,
      });
    }
  }, [dayFormat]);

  const renderPriceDetails = () => {
    if (coin) {
      return (
        <div className="card d-flex flex-row justify-content-around mb-3 mt-1" style={{ boxShadow: 'none', width: '100%' }}>

          <span>
            <div className="text-muted" style={{ fontSize: '.8rem' }}>Current price</div>
            <span className="lead">
              $
              {coin.current_price.toFixed(2)}
            </span>
          </span>

          <span className={
            coin.price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'
          }
          >
            <div className="text-muted" style={{ fontSize: '.8rem' }}>Price change</div>
            <span className="lead">
              {
              coin.price_change_percentage_24h < 0
                ? <i className="fas fa-sort-down align-middle mr-2" />
                : <i className="fas fa-sort-up align-middle mr-2" />
            }
              {coin.price_change_percentage_24h.toFixed(2)}
              %
            </span>
          </span>
        </div>
      );
    }
    return (<div />);
  };

  return (
    <div className="card">
      {renderPriceDetails()}
      <div>
        <canvas id="coinChart" ref={chartRef} width="250" height="250" />
      </div>
      <div className="mt-3 d-flex justify-content-between" width="100%">
        <span>
          <Link to="/">
            <Button variant="link text-muted" className="m-1" type="submit"><i className="fas fa-arrow-left" /></Button>
          </Link>
        </span>
        <span>
          <Button variant={dayFormat === '24h' ? 'secondary' : 'outline-secondary'} className="m-1" type="submit" onClick={() => setDayFormat('24h')}>Day</Button>
          <Button variant={dayFormat === '7 days' ? 'secondary' : 'outline-secondary'} className="m-1" type="submit" onClick={() => setDayFormat('7 days')}>Week</Button>
          <Button variant={dayFormat === '1 year' ? 'secondary' : 'outline-secondary'} className="m-1" type="submit" onClick={() => setDayFormat('1 year')}>Year</Button>
        </span>
      </div>

    </div>
  );
};

export default CoinChart;

CoinChart.propTypes = {
  chartData:
      PropTypes.shape({
        day: PropTypes.arrayOf(PropTypes.shape()),
        week: PropTypes.arrayOf(PropTypes.shape()),
        year: PropTypes.arrayOf(PropTypes.shape()),
        coin: PropTypes.shape(),
      }).isRequired,
};
