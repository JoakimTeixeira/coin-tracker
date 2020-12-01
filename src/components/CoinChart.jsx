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

  return (
    <div className="card">
      <div>
        <div />
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
