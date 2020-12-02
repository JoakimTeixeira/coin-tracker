import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Chartjs from 'chart.js';
import { chartConfig } from 'utils/chartConfig';

const CoinChart = ({ chartData }) => {
  const chartRef = useRef();
  const { day, marketDetail } = chartData;

  useEffect(() => {
    const getChartInstance = () => new Chartjs(chartRef.current, {
      type: 'line',
      data: {
        datasets: [{
          label: `${marketDetail.name} price`,
          data: day,
          backgroundColor: 'rgba(100, 132, 187, 0.5)',
          borderWidth: 1,
          pointRadius: 0,
        }],
      },
      options: chartConfig,
    });

    if (chartRef && chartRef.current && marketDetail) {
      getChartInstance();
    }
  }, []);

  const renderPriceDetails = () => {
    if (marketDetail) {
      return (
        <div className="card d-fle flex-row justify-content-around mb-3 mt-1" style={{ boxShadow: 'none', width: '100%' }}>
          <span>
            <div className="text-muted" style={{ fontSize: '.8rem' }}>Current price</div>
            <span className="lead">
              $
              {marketDetail.current_price.toFixed(2)}
            </span>
          </span>
          <span className={
            marketDetail.price_change_percentage_24h < 0 ? 'text-danger' : 'text-success'
          }
          >
            <div className="text-muted" style={{ fontSize: '.8rem' }}>Price change</div>
            <span className="lead">
              {
              marketDetail.price_change_percentage_24h < 0
                ? <i className="fas fa-sort-down align-middle mr-2" />
                : <i className="fas fa-sort-up align-middle mr-2" />
            }
              {marketDetail.price_change_percentage_24h.toFixed(2)}
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
      <div>{renderPriceDetails()}</div>
      <div>
        <canvas id="coinChart" ref={chartRef} width="250" height="250" />
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
        marketDetail: PropTypes.shape(),
      }).isRequired,
};
